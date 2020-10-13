/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @uses https://github.com/clauderic/react-sortable-hoc
 *
 * @since 0.0.1
 */

/**
 * Dependencies
 */
// External
import React from "react";
import Sortable from "./sortable";
// Internal
import ContentListContext from "../context";
import arrayMove from "array-move";
// WordPress
const {
    element: {
        useRef,
        useState,
        useEffect,
        useContext,
    }
} = wp;

/**
 * A React Sortable HOC component.
 *
 * @param {Array} ids
 * @param {Number} columns
 * @param {Array} display
 * @param {function} onSortEnd
 * @param {Number} itemInEdit
 * @param {Number} itemsToShow
 * @param {function} attrsChange
 * @param {string} orientation
 * @param {function} moveSearchToItem
 *
 * @returns {*}
 *
 * @constructor
 *
 * @since 0.0.1
 */
const Content = (
    {
        ids,
        columns,
        display,
        onSortEnd,
        itemInEdit,
        itemsToShow = 2,
        attrsChange,
        orientation,
        moveSearchToItem,
    }
) => {

    const { queryArgs } = useContext( ContentListContext );

    // We need to bind react sortable hoc drag instances to something closer to our blocks markup
    // @link https://github.com/clauderic/react-sortable-hoc#sortablecontainer-hoc
    const sortHelperElement = useRef( null );

    return (
        <>
            <div className='cl-block__sort-helper' ref={ sortHelperElement }/>
            <Sortable
                axis={ 'xy' }
                moveSearchToItem={ moveSearchToItem }
                onSortEnd={ ( e ) => {
                    onSortEnd( ids, e );
                } }
                helperContainer={ sortHelperElement.current }
                useDragHandle={ true }
                clearItem={ ( i ) => {
                    const newContent = [ ...ids ];
                    newContent.splice( i, 1, 0 );
                    attrsChange( newContent, 'ids' );
                } }
                distance={ 1 }
                { ...{
                    display,
                    columns,
                    queryArgs,
                    itemInEdit,
                    orientation,
                    itemsToShow,
                    ids,
                } }
            />
        </>
    );
};

export default Content;



