/**
 * Content Select Component.
 * Loosely based off FlatTermSelector.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from 'accessible-autocomplete/react';
import TaxonomyTermsToken from './taxonomy-terms-token';

import proxy from "../store/proxy";
import Help from "./help";
import { commaConjunction } from "../common/utils";

const {
    data: {
        withSelect
    },
    components: {
        Spinner,
    },
    htmlEntities: {
        decodeEntities
    },
    i18n: {
        __,
        sprintf,
    },
    element: {
        useState,
    },
    url: {
        addQueryArgs
    },
    apiFetch
} = wp;

const { debounce } = lodash;

/**
 * Render Suggestion.
 *
 * @param post
 * @returns {string}
 */
export const renderSuggestion = ( post ) => {
    const titleOutput = post?.label ?? null;
    if ( null === titleOutput ) {
        return;
    }
    return `<div>${ decodeEntities( titleOutput ) }</div>`;
};

/**
 * TaxonomyTerms Component.
 */
function TaxonomyTerms(
    {
        max,
        label,
        terms,
        endpoint,
        instanceId,
        emitAttributes,
    }
) {

    const [ loading, isLoading ] = useState( false );

    /**
     * Search triggered when auto-complete searches.
     *
     * @param {String} keyword
     * @param {function} populateResults
     */
    const search = ( keyword, populateResults ) => {
        isLoading( true );
        apiFetch( {
            path: addQueryArgs( `wp/v2/${ endpoint() }`, {
                search: keyword,
                'content-list': 1,
            } )
        } ).then( ( contents ) => {
            populateResults( contents );
            isLoading( false );
        } ).catch( err => {
            console.error( err ); // eslint-disable-line
            isLoading( false );
        } );
    };

    /**
     * Translator method override for Autocomplete.
     *
     * @returns {*}
     */
    const tNoResults = () => {
        return loading ? __( 'Fetching...', 'tenup' ) : __( 'No Results found.', 'tenup' );
    };

    /**
     * Term Ids
     */
    const termIds = () => terms.reduce( ( acc, term ) => {
        acc.push( term.id );
        return acc;
    }, [] );

    /**
     * Method for removing items.
     * @param i
     */
    const remove = ( i ) => {
        const tIds = termIds();
        tIds.splice( i, 1 );
        emitAttributes( tIds );
    };

    const taxonomyHelp = <Help
        align={'right'}
        text={ sprintf( __( 'Search through %s by clicking, then typing, in the box below.' ), label ) }
    />;

    /**
     * @type {string}
     */
    const autoComplete = (
        <div className={ 'cl-block__taxonomy-terms__autocomplete' }>
            <label htmlFor={ `cl-block__taxonomy-terms__autocomplete-${ instanceId }` } className={'components-base-control__label'}>
                { terms.length } / { max } { label }
                <span className={ loading ? '' : 'hidden' }>
                    <Spinner/>
                </span>
            </label>
            {taxonomyHelp}
            {max > terms.length && <Autocomplete
                id={ `cl-block__taxonomy-terms__autocomplete-${ instanceId }` }
                minLength={ 3 }
                placeholder={ sprintf( __( 'Find %s...', 'tenup' ), label ) }
                source={ debounce( ( keyword, populateResults ) => {
                    if ( max === terms.length ) {
                        return;
                    }
                    search( keyword, populateResults );
                }, 800 ) }
                showNoOptionsFound={ true }
                autoSelect={ true }
                templates={ {
                    inputValue: () => '',
                    suggestion: renderSuggestion,
                } }
                onConfirm={ ( v ) => {
                    if ( 'undefined' === typeof v ) {
                        return;
                    }
                    emitAttributes( [ ...termIds(), v.id ] );
                } }
                tNoResults={ () => tNoResults() }
            />}
        </div>
    );

    return (
        <div tabIndex={ 0 } className={ 'cl-block__taxonomy-terms components-base-control widefat' }>
            { autoComplete }
            <div className='cl-block__tokens'>
                { 0 !== terms.length && terms.map( ( { id, label }, index ) => {
                    return (
                        <TaxonomyTermsToken
                            key={ `token-${ id }-${ index }` }
                            index={ index }
                            val={ id }
                            title={ label }
                            onClickRemove={ ( { index } ) => {
                                remove( index );
                            } }
                        />
                    );
                } ) }
            </div>
        </div>
    );
}

TaxonomyTerms.propTypes = {
    max: PropTypes.number,
    label: PropTypes.string,
    endpoint: PropTypes.func,
    taxonomy: PropTypes.string,
    emitAttributes: PropTypes.func,
    terms: PropTypes.arrayOf(
        PropTypes.shape( {
            name: PropTypes.number,
            title: PropTypes.string,
            taxonomies: PropTypes.objectOf( PropTypes.number ),
        } )
    )
};

TaxonomyTerms.defaultProps = {
    label: __( 'Add Content', 'tenup' ),
    max: 3,
    endpoint: () => 'posts',
    terms: [],
};

/**
 * Map props to state and taxonomy term requests.
 */
export default withSelect( ( select, { terms = [], taxonomy } ) => {
    const instanceId = taxonomy;
    if ( 0 === terms.length ) {
        return {
            instanceId,
            terms: []
        }
    }

    let _terms = select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, { include: terms, "content-list": 1 } );

    if ( null === _terms ) {
        return {
            instanceId,
            terms: new Array( terms.length ).fill( { id: 0, label: __( 'Fetching term...', 'tenup' ) } )
        }
    }

    _terms = proxy.terms( { terms: _terms } );

    return {
        instanceId,
        terms: _terms,
    };
} )( TaxonomyTerms );


