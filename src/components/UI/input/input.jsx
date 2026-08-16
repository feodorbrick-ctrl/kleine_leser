import React from 'react';
import cl from './input.module.css'

const Input = ({placeholder, width, value, onChange, className = undefined}) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className={`${cl.input} ${className || ''}`}
            style={{width: width}}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;