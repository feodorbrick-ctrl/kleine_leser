import React, {useContext, useEffect} from 'react';
import cl from '../styles/startP.module.css';
import LessonCards from "../components/UI/lessonCards/lessonCards";
import {getLessonCardsData} from "../components/data/lessonCardsData";
import Header from "../components/UI/header/header";
import Context from "../index";

const StartP = () => {
    const {userData, switchedLanguage, settings} = useContext(Context)
    const lessonCardsData = getLessonCardsData(switchedLanguage.lessonCardsText);
    let language = switchedLanguage.startPText;

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('settings', JSON.stringify(settings));
        console.log('set to localStorage')
    }, [userData, settings]);

    return (
        <div className={cl.lessonCardsZone}>
            <Header/>
            <LessonCards startLessonBtnName={language.startLessonBtnText}
                         cardData={lessonCardsData.wordFromLettersCard}/>
            <LessonCards startLessonBtnName={language.startLessonBtnText}
                         cardData={lessonCardsData.wordLessonCard}/>
            <LessonCards startLessonBtnName={language.startLessonBtnText}
                         cardData={lessonCardsData.sentenceLessonCard}/>
        </div>
    );
};

export default StartP;