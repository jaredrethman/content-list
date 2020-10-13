import {cacheIndexer} from "../common/utils";

/**
 * TenUp Redux Store(s)
 */

const {
    data: {
        dispatch,
        registerStore
    },
    url: {
        addQueryArgs
    },
    apiFetch
} = wp;

/**
 * Global Actions
 * @type {{fetchTopics(): *, setTopics(*): *, toggleIsFetching(*): *}}
 */
const actions = {
    core: {
        toggleIsFetching( fetching ) {
            return {
                type: 'TOGGLE_IS_FETCHING',
                fetching
            };
        },
    },
    content: {
        receiveContent( { ids, path, args } ) {
            return {
                type: 'RECEIVE_CONTENT',
                ids,
                path,
                args,
            };
        },
        setContent( content ) {
            return {
                type: 'SET_CONTENT',
                content: cacheIndexer( content ),
            };
        }
    }
};

export const store = {

    /**
     * Stores reference to search results, to avoid unnecessary
     * queries to the DB.
     *
     * @returns {({searching, results}&{searching: *})|*|{searching: *, type: string}|{type: string, results: *}|({searching, results}&{results: ((state.results&*)|({}&*))})|{searching: boolean, results: {}}}
     */
    search() {
        registerStore('tenup/search', {
            reducer(state = {
                results: {},
                searching: false,
            }, action) {
                switch (action.type) {
                    case 'SET_SEARCH_RESULTS':
                        return {
                            ...state,
                            results: {
                                ...state.results,
                                ...action.results,
                            }
                        };
                    case 'TOGGLE_IS_SEARCHING':
                        return {
                            ...state,
                            searching: action.searching
                        };
                }
                return state;
            },

            actions: {
                addRecords(results) {
                    return {
                        type: 'SET_SEARCH_RESULTS',
                        results
                    };
                },
                toggleIsSearching(searching) {
                    return {
                        type: 'TOGGLE_IS_SEARCHING',
                        searching
                    };
                },
            },

            selectors: {
                getRecords(state) {
                    return state.results;
                },
                isSearching(state) {
                    return state.searching;
                },
            },
        });
    },

    /**
     * Handles global fetching state and setting topics to an easily available object.
     *
     * @returns {{topics: Array, fetching: boolean}|({topics, fetching}&{fetching: (*|boolean|(function(*, *, *, *, *, *): (undefined)))})|boolean|*|(function(*, *, *, *, *, *): (undefined))|*|*|{topics: *, type: string}|({topics, fetching}&{topics: (*|Array|Window.wp.editor.fullscreen.pubsub.topics|{}|(function(*, *, *, *, *, *): (undefined))|topics)})|Array|*|Window.wp.editor.fullscreen.pubsub.topics|{}|(function(*, *, *, *, *, *): (undefined))|topics}
     */
    core() {
        registerStore('tenup/core', {
            reducer(state = {
                fetching: false,
            }, action) {
                return {
                    ...state,
                    fetching: action.fetching
                };
            },

            actions: {
                ...actions.core
            },

            selectors: {
                isFetching(state) {
                    return state.fetching;
                },
            },
        });
    },

    /**
     * Content Store.
     *
     * @returns {boolean|*|{fetching: boolean, content: {}}|{fetching: *, content}|{fetching, content: *}}
     */
    content() {
        registerStore('tenup/content', {

            reducer( state = {
                content: {},
            }, action ) {
                return {
                    ...state,
                    content: {
                        ...state.content,
                        ...action.content
                    }
                };
            },

            actions: {
                ...actions.content,
            },

            selectors: {
                getContent(state) {
                    return state.content;
                },
                fetchContent(state) {
                    return state.content;
                },
            },

            controls: {
                RECEIVE_CONTENT( { ids, path, args } ) {
                    if( 0 !== ids.length ){
                        args['ids'] = ids.join(',');
                    }
                    return apiFetch( {
                        path: addQueryArgs( path, {
                            ...args,
                            'content-list': 1,
                        })
                    } );
                }
            },

            resolvers: {
                * fetchContent( { ids = [], path = '/tenup/v1/content', args = {} } ) {
                    dispatch( 'tenup/core' ).toggleIsFetching( true );
                    const content = yield actions.content.receiveContent( { ids, path, args } );
                    dispatch( 'tenup/core' ).toggleIsFetching( false );
                    return actions.content.setContent( content );
                },
            },

        } );
    }
};

export default store;