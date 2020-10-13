/**
 * Type and Taxonomy Select Component.
 *
 * @package TenUp
 */
import React from 'react';
import PropTypes from 'prop-types';

import TaxonomyTerms from "./taxonomy-terms";
import Help from "./help";
import { commaConjunction } from "../common/utils";

const {
    components: {
        SelectControl,
    },
    i18n: {
        __,
        sprintf
    },
} = wp;

const {
    typesTaxes: typeTaxes,
} = tenUp;

/**
 * Term Select Component.
 */
function TypeTaxes(
    {
        label,
        onSelect,
        taxonomies,
        contentType,
    } ) {

    const types = Object.values( typeTaxes );

    const termSelects = 0 === taxonomies.length ? '' : taxonomies.map( v => {
        return (
            <div key={ `${ v.name }-taxonomy` } className='cl-block__taxonomy-terms'>
                <TaxonomyTerms
                    key={ `${ v.name }-taxonomy` }
                    terms={ v.terms }
                    label={ v.label }
                    endpoint={ () => {
                        const _contentType = typeTaxes.find( ( type ) => {
                            return type.name === contentType;
                        } );
                        if ( 0 === _contentType.taxonomies.length ) {
                            return '';
                        }
                        return _contentType.taxonomies.find( tax => tax.name === v.name ).rest_base
                    } }
                    taxonomy={ v.name }
                    max={ 3 }
                    emitAttributes={ ( termIds ) => {
                        onSelect( {
                            name: v.name,
                            terms: termIds
                        } );
                    } }/>
            </div>
        );
    } );

    const contentTypeOptions = types.reduce( ( acc, type ) => {
        acc.push( {
            label: type.label,
            value: type.name
        } );
        return acc;
    }, [] );

    const contentTypeHelp = <Help
        align='right'
        text={ sprintf(
            __( 'Fetch content from %s, content types, by selecting an option from the dropdown.' ),
            commaConjunction(
                contentTypeOptions.reduce( ( acc, type ) => {
                    acc.push( type.label );
                    return acc;
                }, [] )
            )
        ) }
    />;

    return (
        <div className={ 'cl-block__inspector-control' }>
            { contentTypeHelp }
            <SelectControl
                className={ 'widefat' }
                label={ label }
                value={ contentType }
                onChange={ contentType => {
                    onSelect( {
                        contentType
                    } );

                } }
                options={ contentTypeOptions }
            />
            { termSelects }
        </div>
    );
}

/**
 * Term Select Prop Types
 *
 * @type {{taxonomies: [{}], label: {String}, contentType: {String}, onSelect: {function}}}
 */
TypeTaxes.propTypes = {
    label: PropTypes.string,
    onSelect: PropTypes.func,
    taxonomies: PropTypes.arrayOf(
        PropTypes.shape( {
            name: PropTypes.string,
            label: PropTypes.string,
            rest_base: PropTypes.string,
            terms: PropTypes.arrayOf(
                PropTypes.number
            ),
        } )
    ),
    contentType: PropTypes.string,
};

/**
 * Export withSelect wrapped component to sync,
 * a list of terms for a given Taxonomy from state to props.
 * similar to mapStateToProps.
 */
export default TypeTaxes;
