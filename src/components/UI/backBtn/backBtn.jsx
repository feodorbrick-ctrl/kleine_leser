import React from 'react';
import cl from "./backBtn.module.css";
import crossImage from "../../../images/cross.png";
import Btn from "../btn/btn";

const BackBtn = ({callback}) => {
    return (
        <Btn
            className={cl.crossBtn}
            width='10vh'
            height='10vh'
            left='85%'
            btnName={
                <img
                    className={cl.crossBtnImg}
                    src={crossImage}
                    alt="cross"
                />
            }
            callback={callback}
        />
    );
};

export default BackBtn;