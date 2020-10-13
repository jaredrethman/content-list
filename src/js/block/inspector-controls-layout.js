/**
 * Content List - Inspector Controls - Layout.
 *
 * @package TenUp\Plugin\ContentList
 */

/**
 * Dependencies
 */
// External
import React from "react";
// Internal
import Help from "../components/help";
// WordPress
const {
    components: {
        RangeControl,
        SelectControl,
        withFilters,
    },
    i18n: {
        __
    },
} = wp;
// 10up
const {
    contentList: {
        styleOptions
    },
    config: {
        postsPerPage,
    },
} = tenUp;

/**
 * Inspector Controls - Layout.
 *
 * @param {string} style Style dropdown control.
 * @param {number} columns Content grid columns.
 * @param {function} attrsChange Function to emit changes to Content List.
 * @param {number} itemsToShow Items to show in content grid.
 * @param {string} orientation Content items layout.
 *
 * @returns {*}
 * @constructor
 */
function InspectorControlsLayout(
    {
        style,
        columns,
        attrsChange,
        itemsToShow,
        orientation,
    }
) {
    return (
        <>
            <div className={ 'cl-block__inspector-control' }>
                <Help
                    align={ 'right' }
                    text={ __( 'Use the below slider to control the amount of columns the content should display in.', 'tenup' ) }
                />
                <RangeControl
                    className={ 'cl-block__controls-columns' }
                    label={ __( 'Columns', 'tenup' ) }
                    value={ columns }
                    onChange={ ( val ) => {
                        attrsChange( val, 'columns' );
                    } }
                    min={ 1 }
                    max={ 3 }
                    required
                />
            </div>
            <div className={ 'cl-block__inspector-control' }>
                <Help
                    align={ 'right' }
                    text={ __( 'Use the below slider to control the amount of items that should display.', 'tenup' ) }
                />
                <RangeControl
                    className={ 'cl-block__controls-count' }
                    label={ __( 'Count', 'tenup' ) }
                    value={ itemsToShow }
                    onChange={ ( val ) => {
                        attrsChange( val, 'itemsToShow' );
                    } }
                    min={ 1 }
                    max={ postsPerPage }
                    required
                />
            </div>
            <div className={ 'cl-block__inspector-control' }>
                <Help
                    align={ 'right' }
                    text={ __( 'Use the below dropdown to assign a style to your Content List.', 'tenup' ) }
                />
                <SelectControl
                    className={ 'cl-block__controls-style' }
                    label={ __( 'Style?' ) }
                    value={ style }
                    onChange={ ( val ) => {
                        attrsChange( val, 'style' );
                    } }
                    options={ styleOptions }
                />
            </div>
            <div className={ 'cl-block__inspector-control' }>
                <Help
                    align={ 'right' }
                    text={ __( 'Use the below dropdown to delegate the individual content list items orientation.', 'tenup' ) }
                />
                <SelectControl
                    className={ 'cl-block__controls-orientation' }
                    label={ __( 'Orientation?' ) }
                    value={ orientation }
                    onChange={ ( val ) => {
                        attrsChange( val, 'orientation' );
                    } }
                    options={ [
                        {
                            label: __( 'Portrait', 'tenup' ),
                            value: 'portrait',
                        },
                        {
                            label: __( 'Landscape', 'tenup' ),
                            value: 'landscape',
                        },
                    ] }
                />
            </div>
        </>
    )
}

export default withFilters( 'contentList.extraLayoutControls' )( InspectorControlsLayout );