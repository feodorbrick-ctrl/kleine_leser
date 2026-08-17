import React from 'react';
import cl from './btn.module.css'

const Btn = ({btnName, callback, height = '180px', width = '14vw', left = '60vw', right = '0'}) => {
    return (
        <button style={{height: height, width: width, left: right === '0' ? left : '0', right: right}} className={cl.btn} onClick={callback}>
            {btnName}
        </button>
    );
};

export default Btn;