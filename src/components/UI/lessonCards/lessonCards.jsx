import React, {useContext} from 'react';
import cl from './lessonCards.module.css'
import Btn from "../btn/btn";
import Context from "../../../index";
import {useNavigate} from "react-router-dom";

const LessonCards = ({cardData, startLessonBtnName = 'Start lesson'}) => {
    const {setLessonType, userData} = useContext(Context);
    const navigate = useNavigate()
    return (
        <div className={cl.lessonCard}>
            <h1>{cardData.lessonName}</h1>
            <div className={cl.lessonImgContainer}>
                <img src={cardData.lessonCardImg} alt={cardData.lessonName} className={cl.lessonImg}/>
            </div>
            <p className={cl.cardDescription}>{cardData.lessonDescription}</p>
            <Btn btnName={startLessonBtnName} callback={() => {
                setLessonType(cardData.getLessonType())
                if (userData.stars > 1) {
                    userData.stars = userData.stars - 2
                }
                navigate('/words')
            }} width='100%' height='10vh' left='0'/>
        </div>
    );
};

export default LessonCards;