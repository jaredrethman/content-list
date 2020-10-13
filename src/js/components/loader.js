/**
 * Content List Block Loader Component.
 *
 * @package TenUp
 */
import React from 'react';
import PropTypes from 'prop-types';

const {
    components: {
        Spinner,
    },
    data: {
        withSelect,
    }
} = wp;

/**
 * Content List Loader Component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Loader( props ) {
    const loader = props.fetching || props.searching ? <Spinner/> : '';
    return (
        <>
            { loader }
        </>
    );
}

Loader.propTypes = {
    fetching: PropTypes.bool,
    searching: PropTypes.bool,
};

export default withSelect( ( select ) => {
    return {
        fetching: select( 'tenup/core' ).isFetching(),
        searching: select( 'tenup/search' ).isSearching(),
    };
} )( Loader );