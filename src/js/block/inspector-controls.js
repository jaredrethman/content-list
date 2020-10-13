/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 */

/**
 * Dependencies
 */
// External
import React from 'react';
import PropTypes from 'prop-types';
import arrayMove from "array-move";
// Internal
import ContentListContext from "../context";
import Loader from '../components/loader';
import TypeTaxes from "../components/type-taxes";
import ComponentToggles from "../components/component-toggles";
import { bindTax, taxonomyParams, getTypeBy } from '../common/utils';
import InspectorControlsLayout from "./inspector-controls-layout";
import Help from "../components/help";
// WordPress
const {
    components: {
        PanelBody,
        RangeControl,
    },
    i18n: {
        __,
    },
    blockEditor: {
        InspectorControls: WpInspectorControls,
    },
    data: {
        withSelect,
    },
    element: {
        useContext,
    },
} = wp;

/**
 * Inspector Controls Function.
 *
 * @returns {*}
 * @constructor
 * @param props
 */
function InspectorControls( props ) {

    const {
        display,
        fetching,
        searching,
        orientation,
        attrsChange,
        fetchContent,
    } = props;

    const { queryArgs } = useContext( ContentListContext );

    /**
     *
     * @type {{pointerEvents: (string), opacity: number}}
     */
    const inspectorControlsCss = {
        pointerEvents: fetching || searching ? 'none' : 'auto',
        opacity: fetching || searching ? 0.5 : 1,
    };

    /**
     * SetAttribute changes to queryArgs
     */
    const bindTypeTaxes = ( val, key ) => {
        attrsChange(
            {
                ...queryArgs,
                [ key ]: val
            },
            'queryArgs',
            'object',
        );
    };

    const typeObj = getTypeBy( 'name', queryArgs.contentType );

    /*
    const taxonomyDisplay = display.find( d => {
        return d.name === 'taxonomy';
    } ) ?? {};
    */

    return (
        <WpInspectorControls>
            <div style={ inspectorControlsCss }>
                <PanelBody title={ __( 'Fetch Posts', 'tenup' ) }>
                    <p className={ 'cl-block__text-sml' }>
                        { __( 'The below controls determine which content to fetch. Click "Fetch" to bulk curate content.', 'tenup' ) }
                    </p>
                    <TypeTaxes
                        label={ __( 'Content Types', 'tenup' ) }
                        { ...{
                            contentType: queryArgs.contentType,
                            taxonomies: bindTax( queryArgs.contentType, queryArgs.taxonomies ),
                        } }
                        onSelect={ option => {
                            if ( option.terms ) {
                                const taxonomies = [ ...queryArgs.taxonomies ];
                                const taxIndex = taxonomies.findIndex( tax => tax.name === option.name );
                                if ( -1 === taxIndex ) {
                                    taxonomies.push( option );
                                    bindTypeTaxes( taxonomies, 'taxonomies' );
                                    return;
                                }
                                taxonomies[ taxIndex ].terms = option.terms;
                                bindTypeTaxes( taxonomies, 'taxonomies' );
                            } else if ( option.contentType ) {
                                bindTypeTaxes( option.contentType, 'contentType' );
                            }
                        } }
                    />
                    <div className={ 'cl-block__inspector-control' }>
                        <Help
                            align={ 'right' }
                            text={ __( 'Use the below slider to control the offset of queried content.', 'tenup' ) }
                        />
                        <RangeControl
                            className={ 'cl-block__controls-offset' }
                            label={ __( 'Offset', 'tenup' ) }
                            value={ queryArgs.offset }
                            onChange={ ( val ) => {
                                attrsChange( { offset: val }, 'queryArgs', 'object' );
                            } }
                            min={ 0 }
                            max={ 20 }
                        />
                    </div>
                    <button
                        className='button cl-block__button'
                        onClick={ () => {
                            fetchContent( {
                                path: `wp/v2/${ typeObj.rest_base }`,
                                params: {
                                    ...{
                                        offset: queryArgs.offset,
                                        per_page: queryArgs.per_page,
                                    },
                                    ...taxonomyParams( queryArgs.taxonomies, typeObj ),
                                }
                            } );
                        } }
                    >
                        { __( 'Fetch ', 'tenup' ) }
                    </button>
                    <Loader/>
                </PanelBody>
                <PanelBody
                    title={ __( 'Layout', 'tenup' ) }
                    initialOpen={ false }
                >
                    <p className={ 'cl-block__text-sml' }>
                        { __( 'Use the below fields to control the layout of your block.', 'tenup' ) }
                    </p>
                    <InspectorControlsLayout
                        { ...props }
                    />
                </PanelBody>
                <PanelBody
                    title={ __( 'Display', 'tenup' ) }
                    initialOpen={ false }
                >
                    <p className={ 'cl-block__text-sml' }>
                        { 'portrait' === orientation ?
                            __( 'Use the below controls to show/hide & rearrange individual components in your block.', 'tenup' ) :
                            __( 'Use the below controls to show/hide & rearrange individual components in your block. The grey bar represents the dividing line. Content above will appear on the left and content below, on the right', 'tenup' )
                        }
                    </p>
                    <ComponentToggles
                        { ...{
                            display,
                            orientation,
                            attrsChange,
                            distance: 1,
                        } }
                        onSortEnd={ ( { oldIndex, newIndex } ) => {
                            attrsChange( arrayMove( [ ...display ], oldIndex, newIndex ), 'display', null );
                        } }
                    />
                </PanelBody>
                {/*{ Object.keys( taxonomyDisplay ) && taxonomyDisplay.value && <PanelBody
                    title={ __( 'Taxonomy Settings - WIP', 'tenup' ) }
                    initialOpen={ true }
                >
                    <ToggleControl
                        label={ __( 'Force Primary Taxonomy?', 'tenup' ) }
                        checked={ true }
                        onChange={ ( val ) => {
                            console.log( val )
                        } }
                    />
                    <RadioControl
                        label={ __( 'Priority Taxonomy', 'tenup' ) }
                        help={ __( 'Prioritise the display of a specific taxonomy. Please note: this settings will have no affect on individually curated slots.' ) }
                        selected={ 'none' }
                        options={ [
                            {
                                label: __( 'None', 'tenup' ),
                                value: 'none',
                            },
                            ...taxesForType( queryArgs.contentType ).reduce( ( acc, option ) => {
                                acc.push( {
                                    value: option.name,
                                    label: option.label,
                                } );
                                return acc;
                            }, [] ) ] }
                        onChange={ ( option ) => {
                            console.log( option )
                        } }
                    />
                    <RangeControl
                        label={ __( 'Taxonomy Count', 'tenup' ) }
                        value={ 10 }
                        onChange={ ( val ) => {
                            console.log( val )
                        } }
                        min={ 1 }
                        max={ 20 }
                        required
                    />
                </PanelBody> }*/ }
            </div>
        </WpInspectorControls>
    );
}

if ( 'development' === NODE_ENV ) {
    InspectorControls.propTypes = {
        style: PropTypes.string,
        columns: PropTypes.number,
        itemsToShow: PropTypes.number,
        orientation: PropTypes.string,
        attrsChange: PropTypes.func,
        fetchContent: PropTypes.func,
        fetching: PropTypes.bool,
        searching: PropTypes.bool,
        display: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    name: PropTypes.string,
                    id: PropTypes.number,
                    settings: PropTypes.arrayOf(
                        PropTypes.shape(
                            {
                                name: PropTypes.string,
                                value: PropTypes.oneOfType( [
                                    PropTypes.string,
                                    PropTypes.number,
                                    PropTypes.bool,
                                ] )
                            }
                        )
                    ),
                }
            )
        ),
    };
}

export default withSelect( ( select ) => {
    return {
        fetching: select( 'tenup/core' ).isFetching(),
        searching: select( 'tenup/search' ).isSearching(),
    };
} )( InspectorControls );
