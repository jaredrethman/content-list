/**
 * Content List Block Notice.
 *
 * @package TenUp
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Notice Component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Notice = ( props ) => {
    return (
        <div className={ `cl-block__admin-notice notice-${ props.type }` }>
            { props.notice }
        </div>
    );
};

/**
 * Default Props.
 *
 * @type {{type: string, notice: string}}
 */
Notice.defaultProps = {
    notice: '',
    type: 'info',
};

/**
 * PropTypes
 * @type {{type: *, notice: *}}
 */
if('development' === NODE_ENV) {
    Notice.propTypes = {
        notice: PropTypes.string,
        type: PropTypes.string,
    };
}

export default Notice;