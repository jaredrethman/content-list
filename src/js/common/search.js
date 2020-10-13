const {
    data: {
        select,
    },
    htmlEntities: {
        decodeEntities
    },
    i18n: {
        __
    },
} = wp;

/**
 * Autocomplete function for rendering
 * suggestions.
 *
 * @param {{}} post
 * @returns {string}
 */
export const renderSuggestion = ( post ) => {
    return `<div>${ decodeEntities( post?.title ?? __( 'Enter at least 3 characters.', 'tenup' ) ) }</div>`;
};

/**
 * Function fired on suggestion selection.
 *
 * @param value
 * @param props
 */
export const suggestionSelect = ( value, props ) => {
    if ( props.index < 1 || typeof value === 'undefined' ) {
        return;
    }
    const newContent = [ ...props.content ];
    newContent.splice( props.index - 1, 1, value.id );
    props.onUpdate(
        newContent,
        'ids',
        null,
    );
};

/**
 * Parse Search
 *
 * @param {{}} content
 * @param {Array} keys
 * @returns {Array}
 */
export const parseSearch = ( content, keys = [] ) => {
    let i = 0;
    const m = content.length;
    const currentRecords = Object.keys( select( 'tenup/search' ).getRecords() );
    const parsed = {};
    const prefix = keys.join( '-' );
    for ( ; i < m; i++ ) {
        if ( ~currentRecords.indexOf( `${ prefix }-${ content[ i ].id }` ) ) {
            continue;
        }
        parsed[ `${ prefix }-${ content[ i ].id }` ] = content[ i ];
    }
    return parsed;
};

/**
 *
 * @param keyword
 * @param keys
 * @returns {{}}
 */
export const searchStateResults = ( keyword, keys = [] ) => {
    let currentRecords = select( 'tenup/search' ).getRecords() ?? {};
    if ( Object.keys( currentRecords ).length < 1 ) {
        return {};
    }
    const prefix = keys.join( '-' );
    return Object.keys( currentRecords ).reduce( ( acc, record ) => {
        let title = currentRecords[ record ]?.title ?? '';
        if ( '' === title ) {
            return acc;
        }
        if ( title.toLowerCase().includes( keyword.toLowerCase() ) && record.includes( prefix ) ) {
            acc[ record ] = currentRecords[ record ];
        }
        return acc;
    }, {} );
};

export default {
    renderSuggestion,
    suggestionSelect,
    parseSearch,
    searchStateResults,
};
