import React from 'react';
import cl from './text.module.css'

const Text = ({w, text, marginTop, newStyles = ''}) => {
    return (
        <h1 style={{width: w, marginTop: marginTop, ...newStyles}} className={cl.text}>
            {text}
        </h1>
    );
};

export default Text;