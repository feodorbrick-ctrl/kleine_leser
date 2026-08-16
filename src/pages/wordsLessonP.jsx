import React, {useContext, useEffect, useState} from 'react';
import Input from "../components/UI/input/input";
import Text from "../components/UI/text/text";
import Btn from "../components/UI/btn/btn";
import cl from '../styles/wordsLessom.module.css'
import Spinner from "../components/UI/spinner/spinner";
import Slider from "../components/UI/slider/slider";
import textSplitter, {typesOfTheLessons} from "../frameworks/textSplitter";
import Context from "../index";
import BackBtn from "../components/UI/backBtn/backBtn";
import {useNavigate, useLocation} from "react-router-dom";
import Header from "../components/UI/header/header";
import {en, ru} from "../components/data/langText";

const WordsLessonP = () => {
    const {setAnswerBlocksText, inputValues, setInputValues, lessonType, livesOfLesson, settings, switchedLanguage} = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let language  = switchedLanguage.wordsLessonText

    useEffect(() => {
        if (location.pathname === '/words') {
            setInputValues(Array.from({
                length: lessonType === 'make-word-lesson' ? settings.makeWordInputs :
                        lessonType === 'make-sentence-lesson' ? settings.makeSentenceInputs :
                        lessonType === 'make-word-from-letters-lesson' && settings.makeWordFromLettersInputs}, (_) => []))
            setAnswerBlocksText([])
        }
    }, [location]);

    function handleInputChange(index, newValue) {
        const newValues = [...inputValues];
        if (newValue !== ' ' || newValue !== '') {
            newValues[index] = newValue;
            setInputValues(newValues);
        }
    }

    function shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        if ([...arr] !== [...array]) {
            return arr;
        }
    }

    async function prepareToLesson() {
        setIsLoading(true);

        const processedData = JSON.parse(JSON.stringify(inputValues));
        const splitter = new textSplitter(processedData, language === en.wordsLessonText ? 'en' : language === ru.wordsLessonText && 'rus');

        for (let i = 0; i < processedData.length; i++) {
            if (lessonType === 'make-word-lesson') {
                processedData[i] = splitter.switchPrepare(typesOfTheLessons.makingTheWords, processedData[i]).filter(el => el !== '');
            } else if (lessonType === 'make-sentence-lesson') {
                processedData[i] = splitter.switchPrepare(typesOfTheLessons.makingTheSentences, processedData[i]).filter(el => el !== '');
            } else if (lessonType === 'make-word-from-letters-lesson') {
                processedData[i] = Array.from(processedData[i]).filter(el => el !== '');
            }

            if (processedData[i].length > 1) {
                processedData[i] = shuffle(processedData[i]);
            }
        }

        setAnswerBlocksText(processedData);

        setTimeout(() => setIsLoading(false), 5000);

        const hasEmpty = processedData.some(item => item.length === 0 || (item.length === 1 && item[0] === ''));
        if (!hasEmpty) {
            navigate('/lesson')
        }
    }


        const inputsToSlider = Array.from(
        {length: lessonType === 'make-word-lesson' ? settings.makeWordInputs :
                    lessonType === 'make-sentence-lesson' ? settings.makeSentenceInputs :
                    lessonType === 'make-word-from-letters-lesson' && settings.makeWordFromLettersInputs},
        (_, i) =>
            <Input
                key={'input ' + i}
                placeholder=''
                width='85%'
                value={inputValues[i]}
                onChange={(e) => handleInputChange(i, e.target.value)}
            />
    );
    return (
        <div className={cl.wordsLesson}>
            <Header/>
            <BackBtn callback={() => navigate('/')}/>
            <Slider arrows={false} reactSlide={inputsToSlider}
            />
            <div className={cl.texts}>
                <Text w='85%' text={language.attentionText} marginTop='13%'/>
                <Text w='85%'
                      text={
                            lessonType === 'make-word-lesson' ? language.instructions.makeWordLessonInstruction :
                            lessonType === 'make-sentence-lesson' ? language.instructions.makeSentenceInstruction :
                            lessonType === 'make-word-from-letters-lesson' && language.instructions.makeWordFromLettersInstruction
                      }
                      marginTop='3%'
                />
                <Btn btnName={language.enterBtnText} callback={prepareToLesson}/>
                <Spinner
                    isSpinnerVisible={isLoading}
                />
            </div>
        </div>
    );
};

export default WordsLessonP;