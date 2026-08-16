import React from 'react';
import cl from './switchColorBtn.module.css'

const SwitchColorBtn = ({setColor, setVisibleModal, children, color}) => {
    const changeColor = () => {
        setColor(color);
        setVisibleModal(false);
    }
    return (
        <button className={cl.switchColorBtn} onClick={changeColor}>
            {children}
        </button>
    );
};

export default SwitchColorBtn;