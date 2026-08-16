import React, {useContext, useEffect, useState} from 'react';
import cl from '../styles/lesson.module.css'
import BackBtn from "../components/UI/backBtn/backBtn";
import Context from "../index";
import AnswerBlock from "../components/UI/answerBlock/answerBlock";
import addOrDeleteAnswer from "../frameworks/addOrDeleteAnswer";
import Btn from "../components/UI/btn/btn";
import {useNavigate, useLocation} from "react-router-dom";
import Header from "../components/UI/header/header";

const LessonP = () => {
    const navigate = useNavigate()
    const {inputValues, answerBlocksText, livesOfLesson, setLivesOfLesson, lessonType, switchedLanguage} = useContext(Context);
    const [lessonId, setLessonId] = useState(0);
    const [currentLesson, setCurrentLesson] = useState(answerBlocksText[lessonId] || []);
    const [switchAnswers, setSwitchAnswers] = useState([]);
    const [dontSwitchAnswers, setDontSwitchAnswers] = useState(currentLesson ? [...currentLesson] : []);
    const addOrDeleteAnswers = new addOrDeleteAnswer(switchAnswers, dontSwitchAnswers, setSwitchAnswers, setDontSwitchAnswers);
    const location = useLocation();
    let language = switchedLanguage.lessonText

    useEffect(() => {
        if (location.pathname === '/lesson') {
            setLivesOfLesson(inputValues.length / 2);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        if (answerBlocksText && answerBlocksText[lessonId]) {
            setCurrentLesson(answerBlocksText[lessonId]);
            setDontSwitchAnswers([...answerBlocksText[lessonId]]);
            setSwitchAnswers([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lessonId]);

    useEffect(() => {
        if (livesOfLesson < 0) {
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [livesOfLesson])

    function nextLesson() {
        if (lessonType === 'make-word-lesson' || lessonType === 'make-word-from-letters-lesson') {
            if (switchAnswers.join('') === inputValues[lessonId]) {
                if (inputValues[lessonId + 1]) {
                    setLessonId(lessonId + 1);
                } else {
                    navigate('/lesson-end')
                }
            } else {
                setLivesOfLesson(livesOfLesson - 1);
            }
        } else if (lessonType === 'make-sentence-lesson') {
            if (switchAnswers.join(' ') === inputValues[lessonId]) {
                if (inputValues[lessonId + 1]) {
                    setLessonId(lessonId + 1);
                } else {
                    navigate('/lesson-end')
                }
            } else {
                setLivesOfLesson(livesOfLesson - 1);
            }
        }
    }

    return (
        <div className={cl.container}>
            <BackBtn callback={() => navigate('words')}/>
            <Header/>
            <div className={cl.answerZone}>
                <div className={cl.answers}>
                    {switchAnswers.length !== 0 && switchAnswers.map((answer, i) => {
                        return (
                            <AnswerBlock
                                text={answer}
                                changeVisible={() => addOrDeleteAnswers.addToBank(i)}
                                key={'answerBlock ' + i}
                            />
                        )
                    })
                    }
                </div>
                <hr className={cl.answerLine}/>
            </div>
            <div className={cl.bankOfWords}>
                {dontSwitchAnswers.length !== 0 && dontSwitchAnswers.map((answer, i) => {
                    return (
                        <AnswerBlock
                            text={answer}
                            changeVisible={() => addOrDeleteAnswers.addToAnswers(i)}
                            key={'answerBlock ' + i}
                        />
                    )
                })
                }
            </div>
            <div className={cl.enterBtn}>
                <Btn callback={nextLesson} btnName={language.enterBtnText} width='100%' height='100%'/>
            </div>
        </div>
    );
};

export default LessonP;