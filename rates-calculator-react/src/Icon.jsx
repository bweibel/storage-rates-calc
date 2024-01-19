// Icon.jsx
import React from 'react';

const Icon = ({ iconPath, altText, ...props }) => {
    return (
        <img src={iconPath} alt={altText} {...props} />
    );
};

export default Icon;