/**
 * Content List Block Search Component.
 *
 * @package TenUp
 */
/** 3rd Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'accessible-autocomplete/react';

/** Internal Dependencies */
import Notice from './notice';
import { getTypeBy, prepareContent } from '../common/utils';
import { parseSearch, searchStateResults, renderSuggestion, suggestionSelect } from '../common/search';

/** WordPress Dependencies */
const {
    data: {
        dispatch,
        select,
    },
    element: {
        useState,
    },
    components: {
        SelectControl,
    },
    i18n: {
        __,
        sprintf,
    },
    url: {
        addQueryArgs
    },
    apiFetch
} = wp;

/** Window Dependencies */
const { debounce } = lodash;
const {
    typesTaxes,
} = tenUp;

/**
 * ContentListSearch Component
 */
function Search( props ) {

    const [ status, setStatus ] = useState( {
        text: '',
        type: 'info',
    } );

    const [ contentType, setContentType ] = useState( typesTaxes[ 0 ].rest_base );

    /**
     * Debounce wrapped API search function.
     *
     * @param keyword
     * @param populateResults
     */
    const search = ( keyword, populateResults ) => {

        const args = {
            'content-list': 1,
            search: keyword,
            per_page: 10
        };

        dispatch( 'tenup/search' ).toggleIsSearching( true );
        setStatus( {
            text: `${ sprintf( __( 'Searching for "%s" in %s', 'tenup' ), keyword, getTypeBy( 'rest_base', contentType ).label ) }.`,
            type: 'info'
        } );
        apiFetch( {
            path: addQueryArgs( `wp/v2/${ contentType }`, args )
        } ).then( ( contents ) => {

            if ( contents.length === 0 ) {
                setStatus( {
                    text: sprintf( __( '0 results found for, "%s".', 'tenup' ), keyword ),
                    type: 'error'
                } );
                dispatch( 'tenup/search' )
                    .toggleIsSearching( false );
                return;
            }

            setStatus( {
                text: sprintf( __( '%s results found for, "%s".', 'tenup' ), contents.length, keyword ),
                type: 'success'
            } );
            /**
             * Add Search to state.results
             */
            dispatch( 'tenup/search' )
                .addRecords(
                    parseSearch( contents, [ contentType ] )
                );

            dispatch( 'tenup/content' ).setContent(
                contents
            );

            /**
             * Populate Drop-down
             */
            populateResults( prepareContent( contents ) );

            /**
             * Toggle searching state
             */
            dispatch( 'tenup/search' )
                .toggleIsSearching( false );

        } ).catch( err => {
            console.error( err );
            /**
             * Toggle searching state
             */
            dispatch( 'tenup/search' )
                .toggleIsSearching( false );
        } );
    };

    /**
     * Search Options
     */
    const contentTypeOptions = typesTaxes.reduce( ( acc, v ) => {
        acc.push( {
            label: v.label,
            value: v.rest_base,
        } );
        return acc;
    }, [] );

    return (
        <>
            { '' !== status.text && <Notice
                notice={ status.text }
                type={ status.type }
            /> }
            <SelectControl
                label={ __( 'Content type:', 'tenup' ) }
                value={ contentType }
                onChange={ ( type ) => {
                    setContentType( type );
                } }
                options={ contentTypeOptions }
            />
            <div className={ 'components-base-control' }>
                <label
                    className={ 'components-base-control__label' }
                    htmlFor={ `cl-block__autocomplete-${ props.clientId }` }
                >
                    { __( 'Search term:' ) }
                </label>
                <Autocomplete
                    minLength={ 3 }
                    id={ `cl-block__autocomplete-${ props.clientId }` }
                    defaultValue={ __( 'Search for content?', 'tenup' ) }
                    source={ debounce( ( keyword, populateResults ) => {
                        if ( select( 'tenup/search' ).isSearching() ) {
                            return;
                        }
                        const stateResults = Object.values( searchStateResults( keyword, [ contentType ] ) );
                        setStatus( { text: '' } );
                        if ( stateResults.length > 1 ) {
                            populateResults( Object.values( stateResults ) );
                            return;
                        }
                        search( keyword, populateResults );
                    }, 800 ) }
                    showNoOptionsFound={ false }
                    autoSelect={ true }
                    overlay={ 'overlay' }
                    templates={ {
                        inputValue: () => {
                            return '';
                        },
                        suggestion: renderSuggestion,
                    } }
                    onConfirm={ ( v ) => {
                        suggestionSelect( v, props );
                        setStatus( { text: '' } );
                    } }
                />
            </div>
        </>
    );
}

Search.propTypes = {
    index: PropTypes.number,
    content: PropTypes.arrayOf(
        PropTypes.number
    ),
    onUpdate: PropTypes.func,
    clientId: PropTypes.string,
    closeSearch: PropTypes.func,
};

export default Search;
