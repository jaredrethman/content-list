import React from "react";
import { SortableHandle } from "react-sortable-hoc";

const {
    components: {
        Icon
    },
    i18n: {
        __
    },
} = wp;

/**
 * Sortable Handle
 *
 * @type {React.ComponentClass<any>}
 */
export default SortableHandle( () => {
    return (
        <a tabIndex={0}>
            <Icon
                icon={ 'move' }
                className={ 'cl-block__sort-handle' }
                label={ __( 'Move this item', 'tenup' ) }
            />
        </a>
    );
} );