export const content = ( { select, ids, args } ) => {

    const cache = select( 'tenup/content' ).getContent();
    const cacheKeys = Object.keys( cache );
    const dynamicItem = {
        id: 0,
    };

    let content = [];

    if ( 0 === ids.length ) {
        return new Array( args.itemsToShow ).fill( dynamicItem );
    }

    // If cache is empty, fetch using ids
    if ( 0 === cacheKeys.length ) {
        // Nothing saved, fetch content
        ids = ids.filter( id => 0 < id );
        if ( 0 === ids.length ) {
            return new Array( args.itemsToShow ).fill( dynamicItem );
        }
        content = select( 'tenup/content' ).fetchContent( { ids, ...args } ) ?? {};
        content = Object.values( content );
    } else {
        for ( let i = 0; i < args.itemsToShow; i++ ) {
            if ( Object.hasOwnProperty.call( cache, ids[ i ] ) ) {
                content.push( cache[ ids[ i ] ] );
                continue;
            }
            content.push( dynamicItem );
        }
    }

    return content;
};

export const terms = ( args ) => {
    const terms = [ ...args.terms ];
    for ( let i = 0, m = terms.length; i < m; i++ ) {
        if ( Object.hasOwnProperty.call( terms[ i ], '_links' ) ) {
            delete terms[ i ]._links;
        }
    }
    return terms;
};

export default {
    content,
    terms,
};