/**
 * Content List - Component Display Toggles.
 * Sortable list of toggles to show/hide different sub components within the block.
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
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
// WordPress
const {
    components: {
        Icon,
        ToggleControl,
    },
    i18n: {
        __
    },
} = wp;

/**
 * Sortable Handle.
 *
 * @type {React.ComponentClass<any>}
 *
 * @since 0.0.1
 */
const SortableMove = SortableHandle( () => {
    return (
        <a className='cl-block__controls-display-item-handle'>
            <Icon
                icon={ 'sort' }
                className={ 'cl-block__sort-handle' }
                label={ __( 'Move this item', 'tenup' ) }
            />
        </a>
    );
} );

/**
 * Sortable Item/Element.
 *
 * @type {React.ComponentClass<{readonly name?: *, readonly attrsChange?: *, readonly items?: *, readonly key?: *, readonly labelName?: *} & SortableElementProps>}
 *
 * @since 0.0.1
 */
const SortableToggle = SortableElement( (
    {
        key,
        name,
        items,
        labelName,
        attrsChange,
    }
) => {

    const item = items.find( element => name === element.name );

    return (
        <div
            tabIndex={ 0 }
            aria-label='Move'
            className={ `cl-block__controls-display-item cl-block__controls-display-item-${ name }` }
        >
            { 'separator' !== name ?
                <div className='cl-block__controls-display-item-toggle'>
                    <ToggleControl
                        key={ key }
                        label={ 'Attachment' === labelName ? 'Thumbnail' : labelName }
                        checked={ item.value }
                        onChange={ ( val ) => {
                            const _items = [ ...items ];
                            const index = _items.findIndex( element => name === element.name );
                            _items[ index ].value = val;
                            attrsChange( _items, 'display', null );
                        } }
                    /></div> :
                <div className='cl-block__controls-display-separator'>
                    <Icon
                        icon={ 'menu' }
                        className={ 'cl-block__sort-handle' }
                        label={ __( 'Move this item', 'tenup' ) }
                    />
                </div> }
            { 'separator' !== name && <SortableMove/> }
        </div>
    );
} );

/**
 * Sortable Container.
 *
 * @type {React.ComponentClass<{readonly display?: *, readonly attrsChange?: *, readonly orientation?: *} & SortableContainerProps>}
 *
 * @since 0.0.1
 */
const ComponentToggles = SortableContainer( (
    {
        display,
        attrsChange,
        orientation,
    }
) => {
    return (
        <div className='cl-block__controls-display'>
            { display.map( ( toggle, index ) => {
                return (
                    <SortableToggle
                        { ...{
                            index,
                            orientation,
                            attrsChange,
                            items: display,
                            name: toggle.name,
                            key: `key-${ toggle.name }`,
                            labelName: toggle.name.charAt( 0 ).toUpperCase() + toggle.name.slice( 1 ),
                        } }
                    />
                );
            } ) }
        </div>
    );
} );

export default ComponentToggles;