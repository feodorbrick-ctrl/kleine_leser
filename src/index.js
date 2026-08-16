import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {en} from "./components/data/langText";

const root = ReactDOM.createRoot(document.getElementById('root'));
let Context = createContext(null)

function ContextProvider({children}) {
    const [lessonType, setLessonType] = useState('make-sentence-lesson');
    const [inputValues, setInputValues] = React.useState(Array.from({
            length: lessonType === 'make-word-lesson' ? 5 : lessonType === 'make-sentence-lesson' ? 5 : lessonType === 'make-word-from-letters-lesson' && 10
        }, (_) => [])
    );
    const [switchedLanguage, setSwitchedLanguage] = useState(en);
    const [livesOfLesson, setLivesOfLesson] = useState(inputValues.length / 2);
    const [answerBlocksText, setAnswerBlocksText] = useState([])
    const [colorsArr] = React.useState([
        "red",
        "orange",
        "yellow",
        "green",
        "skyblue",
        "purple",
        "brown",
        "grey",
        "black",
    ]);
    const [colors] = React.useState({
        "red": 'red',
        "orange": "orange",
        "yellow": "yellow",
        "green": "green",
        "skyblue": "skyblue",
        "purple": "purple",
        "brown": "brown",
        "grey": "grey",
        "black": "black",
    });
    const [settings, setSettings] = useState(JSON.parse(localStorage.getItem('settings')) || {
        makeWordFromLettersInputs: 10,
        makeSentenceInputs: 5,
        makeWordInputs: 5,

    });
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {stars: 0, colorOfIcon: colors.skyblue});

    const contextValue = {
        lessonType,
        setLessonType,
        inputValues,
        setInputValues,
        userData,
        setUserData,
        livesOfLesson,
        setLivesOfLesson,
        answerBlocksText,
        setAnswerBlocksText,
        colorsArr,
        colors,
        settings,
        setSettings,
        switchedLanguage,
        setSwitchedLanguage,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </React.StrictMode>
    </BrowserRouter>
);

export default Context;