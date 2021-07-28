import React from 'react';
import './SectionName.css'

const SectionName = ({title, className}) => {
    return (
        <h2 className={`section-title ${className}`}>{title}</h2>
    );
};

export default SectionName;