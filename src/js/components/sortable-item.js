/**
 * Content List Block Search Component.
 *
 * @package TenUp
 */
/** 3rd Party Dependencies */
import React from "react";
import { SortableElement } from "react-sortable-hoc";

/** Internal Dependencies */
import ContentSlot from "./content-slot";
import SortableMove from "./sortable-move";
import { ContentListConsumer } from "../context";

/** WordPress Dependencies */
const {
    components: {
        Icon
    },
    i18n: {
        __
    },
} = wp;

export default SortableElement( (
    {
        display,
        content,
        sortIndex,
        clearItem,
        itemInEdit,
        isDisabled,
        orientation,
    } ) => {

    const mover = isDisabled || itemInEdit > 0 ? '' : <SortableMove/>;
    const clear = 0 !== content.id ? <a onClick={ () => clearItem( sortIndex ) }>
        <Icon
            icon={ 'trash' }
        />
    </a> : '';

    let overlayColumns = '' === mover ? ( '' === clear ? 1 : 2 ) : ( '' === clear ? 2 : 3 );

    return (
        <div className={ `cl-block__grid-item` }>
            <div
                className={ `cl-block__grid-col-${ overlayColumns } cl-block__grid cl-block__grid-item-header` }>
                { clear }
                <ContentListConsumer>
                    { ( { setItemInSearch } ) => (
                        <a onClick={ () => {
                            setItemInSearch( sortIndex + 1 );
                        } }>
                            <Icon
                                icon={ 'search' }
                                label={ __( 'Find Content', 'tenup' ) }
                            />
                        </a>
                    ) }
                </ContentListConsumer>
                { mover }
            </div>
            <ContentSlot
                { ...{
                    display,
                    content,
                    sortIndex,
                    orientation,
                } }
            />
        </div>
    );
} );
