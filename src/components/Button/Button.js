import React from 'react';
import './Button.css'

const Button = ({color}) => {

    return (
        <button style={{backgroundColor: color}}>
            Choose
        </button>
    );
};

export default Button;