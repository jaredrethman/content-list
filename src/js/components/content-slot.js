/**
 * Content List Item - Component.
 *
 * @package TenUp
 */

import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';
import DisplayTerm from "./content-slot-term";

/**
 * Dependencies
 */
// WordPress
const {
    htmlEntities: {
        decodeEntities
    },
    element: {
        Fragment,
    },
    data: {
        withSelect
    },
} = wp;
// 10up
const {
    taxonomies,
} = tenUp;

/**
 * ContentListItem Component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function ContentSlot(
    {
        display,
        content,
        loading,
        orientation,
    }
) {

    const itemElement = ( item, content ) => {
        if ( ! item.value ) {
            return '';
        }
        let element = '';
        switch ( item.name ) {
            case 'attachment':
                element = <div className={ `cl-block__content-attachment` } />;
                if( false !== !! content.featured_media ) {
                    element = (
                        <div className={ `cl-block__content-attachment cl-block__content-attachment-${content.featured_media[1] < content.featured_media[2] ? 'portrait': 'landscape'}` }>
                            { ! loading && <Image srcAttr={ content.featured_media[ 0 ] }/> }
                        </div>
                    );
                }
                break;
            case 'title':
                element = (
                    <div className='cl-block__title-placeholder'>
                        { ! loading && content.id > 0 ? decodeEntities( content.title ) : '' }
                    </div>
                );
                break;
            case 'excerpt':
                element = (
                    <>
                        <div className='cl-block__excerpt-placeholder'>
                            { ! loading && content.id > 0 ? decodeEntities( content.excerpt ) : '' }
                        </div>
                        { ( loading || ( 0 === content.id || '' === content.excerpt ) ) &&
                        <div className='cl-block__excerpt-placeholder'/> }
                        { ( loading || ( 0 === content.id || '' === content.excerpt ) ) &&
                        <div className='cl-block__excerpt-placeholder'/> }
                    </>
                );
                break;
            case 'taxonomy':
                element = ( <div className='cl-block__taxonomy-placeholder'>{
                    Object.values( taxonomies ).map( taxonomy => {
                        return (
                            <Fragment key={ `taxonomies-${ taxonomy }` }>
                                { ! loading && content[ taxonomy ] && <DisplayTerm
                                    termIds={ content[ taxonomy ] }
                                    taxonomy={ taxonomy }
                                /> }
                            </Fragment>
                        );
                    } ) }</div> );
                break;
            default :
                element = (
                    <div className={ `cl-block__${ item.name }-placeholder` }>
                        { ! loading && content[ item.name ] ? decodeEntities( content[ item.name ] ) : '' }
                    </div>
                );
                break;
        }

        return (
            <div
                key={ `${ item.name }-component` }
                className={ `cl-block__content-slot${ loading ? ' cl-block__loading' : '' }` }
            >
                { element }
            </div>
        );
    };

    if ( 'landscape' === orientation ) {
        const separatorIndex = display.findIndex( d => 'separator' === d.name );
        if ( -1 !== separatorIndex ) {

            let left = display.slice( 0, separatorIndex );
            let right = display.slice( separatorIndex + 1 ); // We skip "separator"

            left = left.map( item => {
                return itemElement( item, content );
            } );

            right = right.map( item => {
                return itemElement( item, content );
            } );

            return (
                <div
                    className={ `cl-block__orientation-landscape${ loading ? ' cl-block__loading' : '' }` }
                >
                    <div className='cl-block__left-align'>{ left }</div>
                    <div className='cl-block__right-align'>{ right }</div>
                </div>
            );
        }
    }

    return (
        <div
            className={ `cl-block__orientation-portrait${ loading ? ' cl-block__loading' : '' }` }
        >
            { display.map( item => {
                return itemElement( item, content );
            } ) }
        </div>
    );
}

ContentSlot.propTypes = {
    display: PropTypes.array,
    content: PropTypes.shape(),
    orientation: PropTypes.string,
    fetching: PropTypes.bool,
    searching: PropTypes.bool,
};

export default withSelect( ( select ) => {
    return {
        loading: select( 'tenup/core' ).isFetching() || select( 'tenup/search' ).isSearching(),
    };
} )( ContentSlot );