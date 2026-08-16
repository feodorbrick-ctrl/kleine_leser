import React from 'react';
import cl from './spinner.module.css'

const Spinner = ({isSpinnerVisible}) => {
    return (
        <div className={cl.spinner} style={isSpinnerVisible ? {display: 'block'} : {display: 'none'}}/>
    );
};

export default Spinner;