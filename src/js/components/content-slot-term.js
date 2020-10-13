/**
 * Content Select Component.
 * Loosely based off FlatTermSelector.
 */
import React from 'react';
import PropTypes from 'prop-types';

const {
    data: {
        withSelect
    },
} = wp;

const {
    taxonomies,
} = tenUp;

/**
 * DisplayTerm Component.
 */
function ContentSlotTerm(
    {
        terms,
    }
) {
    return (
        <>
            { terms.map( e => e.label ).join( ', ' ) }
        </>
    );
}

ContentSlotTerm.propTypes = {
    terms: PropTypes.arrayOf(
        PropTypes.shape( {
            label: PropTypes.string,
            id: PropTypes.number,
        } )
    )
};

ContentSlotTerm.defaultProps = {
    terms: []
};

export default withSelect( ( select, { termIds, taxonomy } ) => {

    let terms = [];

    if ( 0 === termIds.length ) {
        return {
            terms,
        }
    }

    const index = Object.values( taxonomies ).findIndex( tax => tax === taxonomy );

    if ( -1 === index || select( 'tenup/core' ).isFetching() ) {
        return {
            terms
        }
    }

    terms = select( 'core' ).getEntityRecords( 'taxonomy', Object.keys( taxonomies )[ index ], {
        include: termIds,
        'content-list': 1
    } ) ?? [];

    if ( 0 === terms.length ) {
        return {
            terms
        };
    }

    terms = terms.reduce( ( acc, t ) => {
        if ( Object.hasOwnProperty.call( t, '_links' ) ) {
            delete t._links;
        }
        acc.push( t );
        return acc;
    }, [] );

    return {
        terms
    }
} )( ContentSlotTerm );


