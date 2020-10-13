/**
 * Content List - Help.
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
import PropTypes from "prop-types";
// WordPress
const {
    components: {
        Icon,
        Tooltip,
    }
} = wp;

/**
 * Help component. Provides a (?) icon with help text on hover.
 *
 * @param {Object} props - Props assigned to React component.
 * @param {string=} [props.text = ''] - Text housing the notice
 * @param {string=} [props.align = ''] - Should this component align, uses position: absolute. Default is empty
 *
 * @returns {*}
 * @constructor
 */
function Help(
    {
        text,
        align,
    }
) {

    return (
        <>
            { '' !== text && <span className={ 'cl-block__help' }>
                <Tooltip
                    text={ text }
                >
                    <span style={ { position: '' === align ? 'relative' : 'absolute', [ align ]: '0' } }>
                        <Icon
                            icon="editor-help"
                        />
                    </span>
                </Tooltip>
                <span className="screen-reader-text">
                    { text }
                </span>
            </span> }
        </>
    );
}

Help.default = {
    text: '',
    align: '',
};

if ( 'development' === NODE_ENV ) {
    /**
     * PropTypes.
     *
     * @type {{text: *}}
     */
    Help.propTypes = {
        text: PropTypes.string,
        align: PropTypes.string,
    }
}

export default Help;