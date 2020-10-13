/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

/**
 * Dependencies
 */
// External
import React from "react";
// Internal
import ContentList from './edit';
import { store } from '../store';
// WordPress
const {
    i18n: {
        __
    },
} = wp;
// TenUp
const {
    typesTaxes,
    config: {
        attributes,
        postsPerPage,
    }
} = tenUp;

// Initialise stores.
store.search();
store.core();
store.content();

/**
 * Block name.
 *
 * @type {string}
 */
export const name = 'tenup/content-list';

/**
 * Block registration options.
 *
 * @type {{}}
 */
export const options = {
    title: __( 'Content List', 'tenup' ),
    description: __( 'Adds a list of Content Types.', 'tenup' ),
    icon: 'screenoptions',
    category: 'layout',
    keywords: [ 'content', 'list' ],
    attributes: {
        ...{
            itemsToShow: {
                type: 'number',
                default: 2,
            },
            columns: {
                type: 'number',
                default: 2,
            },
            display: {
                type: 'array',
                default: []
            },
            style: {
                type: 'string',
                default: '',
            },
            orientation: {
                type: 'string',
                default: 'portrait',
            },
            ids: {
                type: 'array',
                default: new Array( postsPerPage ).fill( 0 )
            },
            queryArgs: {
                type: 'object',
                default: {
                    contentType: typesTaxes[ 0 ]?.name ?? null,
                    per_page: postsPerPage, // eslint-disable-line
                    taxonomies: [],
                    offset: 0,
                }
            },
            title: {
                type: 'object',
                default: {
                    text: '',
                    ctaText: '',
                    url: '',
                }
            },
            footer: {
                type: 'object',
                default: {
                    text: '',
                    url: '',
                }
            },
        }, ...attributes
    },
    edit( block ) {

        const {
            setAttributes,
            clientId
        } = block;

        /**
         * The below is necessary to enforce display attributes to
         * work on a per/block bases.
         *
         * @todo Find proper solution. This is a temp solution to ensure display attributes always write to the editor.
         */
        if ( 0 === block.attributes.display.length ) {
            const display = attributes?.display ?? [
                {
                    name: 'attachment',
                    value: true
                },
                {
                    name: 'taxonomy',
                    value: true,
                    settings: [
                        {
                            name: 'primary_taxonomies',
                            value: true,
                        },
                        {
                            name: 'taxonomies',
                            value: 'all',
                        },
                        {
                            name: 'count',
                            value: -1,
                        },
                    ],
                },
                {
                    name: 'title',
                    value: true
                },
            ];
            setAttributes( { display } )
        }
        return (
            <ContentList
                { ...{
                    clientId,
                    setAttributes,
                    attributes: block.attributes,
                } }
            />
        )
    },
    save: () => null,
};
