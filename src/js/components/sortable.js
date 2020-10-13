/**
 * Content List Block Sortable Components.
 *
 * @package TenUp
 */
import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './sortable-item';
import proxy from "../store/proxy";
import { getSlots } from "../common/utils";

const {
    data: {
        withSelect,
    },
} = wp;

/**
 *
 * @type {React.ComponentClass<{readonly moveSearchToItem?: *, readonly items?: *, readonly itemInEdit?: *, readonly display?: *, readonly columns?: *, readonly clearItem?: *, readonly orientation?: *} & SortableContainerProps>}
 */
const Sortable = SortableContainer( (
    {
        items = [],
        display = [],
        columns,
        clearItem,
        itemInEdit,
        orientation,
        moveSearchToItem,
    } ) => {

    return (
        <div className={ `cl-block__grid-col-${ columns } cl-block__grid cl-block__sort-container` }>
            { items.map( ( value, index ) => {
                return (
                    <SortableItem
                        key={ `item-${ index }` }
                        content={ value }
                        { ...{
                            index,
                            display,
                            clearItem,
                            itemInEdit,
                            orientation,
                            moveSearchToItem,
                        } }
                        sortIndex={ index }
                        isDisabled={ items.length === 1 }
                    />
                );
            } ) }
        </div>
    );
} );

/**
 * WithSelect to bind content to ids.
 * @see proxy
 */
export default withSelect( ( select, { ids, itemsToShow, queryArgs } ) => {
    const content = proxy.content( {
        ids,
        select,
        args: {
            queryArgs,
            itemsToShow,
        }
    } );
    return {
        ids,
        items: content.slice( 0, itemsToShow ),
    };
} )( Sortable );