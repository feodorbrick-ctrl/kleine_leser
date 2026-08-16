import React from 'react';
import cl from './answerBlock.module.css'

const AnswerBlock = ({text, changeVisible}) => {
    function onClick() {
        changeVisible(text)
    }
    return (
        <h2
            className={cl.answerBlock}
        >
            {text}
            <button
                className={cl.clickedZone}
                onClick={onClick}
            >
            </button>
        </h2>
    );
};

export default AnswerBlock;