import React from 'react';
import PropTypes from 'prop-types';
import Loader from "./loader";

const Image = (
    {
        srcAttr,
        title = '',
    }
) => {
    if( ! srcAttr ){
        return (
            <Loader />
        );
    }
    return (
        <>
            <img alt={title} src={srcAttr} />
            <Loader />
        </>
    );
};

Image.propTypes = {
    src: PropTypes.string,
};

export default Image;