import React, {useContext, useEffect} from 'react';
import cl from '../styles/endOfTheLesson.module.css'
import Context from "../index";
import Text from "../components/UI/text/text";
import StarPng from '../images/star.png';
import Btn from '../components/UI/btn/btn';
import {useNavigate, useLocation} from "react-router-dom";
import Header from "../components/UI/header/header";

const EndOfLessonP = () => {
    const {livesOfLesson, userData, setUserData} = useContext(Context);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/lesson-end') {
            setUserData({stars: userData.stars + (livesOfLesson * 2) + 2, colorOfIcon: userData.colorOfIcon});
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location])
    return (
        <div className={cl.texts}>
            <Header/>
            <div className={cl.textZone}>
                <Text text={livesOfLesson * 2} w='10vw'/>
                <img src={StarPng} alt="stars"/>
            </div>
            <Btn btnName='End' width='100%' height='30%' left='0' callback={() => navigate('/')}/>
        </div>
    );
};

export default EndOfLessonP;