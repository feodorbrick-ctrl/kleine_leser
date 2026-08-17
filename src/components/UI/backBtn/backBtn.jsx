import React from 'react';
import cl from "./backBtn.module.css";
import crossImage from "../../../images/cross.png";
import Btn from "../btn/btn";

const BackBtn = ({callback}) => {
    return (
        <Btn
            width='10vh'
            height='10vh'
            left='85%'
            right='10%'
            btnName={
                <img
                    className={cl.crossBtn}
                    src={crossImage}
                    alt="cross"
                />
            }
            callback={callback}
        />
    );
};

export default BackBtn;