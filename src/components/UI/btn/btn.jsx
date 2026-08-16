import React from 'react';
import cl from './btn.module.css'

const Btn = ({btnName, callback, height = '180px', width = '14vw', left = '60vw'}) => {
    return (
        <button style={{height: height, width: width, left: left}} className={cl.btn} onClick={callback}>
            {btnName}
        </button>
    );
};

export default Btn;