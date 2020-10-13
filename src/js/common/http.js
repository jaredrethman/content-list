/**
 * Content List - Http helpers
 *
 * @package TenUp\Plugin\ContentList
 */

const {
    apiFetch,
    data: {
        dispatch
    },
    url: {
        addQueryArgs
    }
} = wp;

/**
 * Http helper.
 *
 * @param {string} path Path endpoint
 * @param {{}} params Key value query params to append to path.
 *
 * @returns {Promise<unknown>}
 */
export const http = ( path, params ) => {
    dispatch( 'tenup/core' ).toggleIsFetching( true );
    return new Promise( (resolve, reject) => {
        apiFetch( {
            path: addQueryArgs( path, {
                ...params,
                'content-list': 1,
            })
        }).then( res => {
            resolve( res );
        }).catch( err => {
            reject( err );
        }).finally( () => {
            dispatch( 'tenup/core' ).toggleIsFetching( false );
        });
    } );
};