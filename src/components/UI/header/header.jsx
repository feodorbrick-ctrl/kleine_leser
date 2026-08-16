import React, {useContext, useEffect, useState} from 'react';
import cl from './header.module.css'
import heartImg from '../../../images/heart.png'
import StarImg from '../../../images/star.png'
import Modal from "../modal/Modal";
import settingsImg from '../../../images/cogWheel.png'
import SwitchPlayerColor from "../switchPlayerColor/switchColorField/switchPlayerColor";
import Context from "../../../index";
import PlayerChip from "../switchPlayerColor/playerChip/playerChip";
import Input from "../input/input";
import Text from "../text/text";
import Btn from "../btn/btn";
import {useLocation} from "react-router-dom";
import {en, ru} from "../../data/langText";

const Header = () => {
    const {settings, setSettings, userData, setUserData, livesOfLesson, switchedLanguage, setSwitchedLanguage} = useContext(Context)
    const [visibleSettingsModal, setVisibleSettingsModal] = useState(false);
    const [visibleSetColorsModal, setVisibleSetColorsModal] = useState(false);
    const [visibleMessageModal, setVisibleMessageModal] = useState(false)
    const [visibleUpdateStarsModal, setVisibleUpdateStarsModal] = useState(false)
    const [color, setColor] = React.useState(userData.colorOfIcon);
    const location = useLocation()
    const [settingsValue, setSettingsValue] = useState([
        settings.makeWordFromLettersInputs,
        settings.makeWordInputs,
        settings.makeSentenceInputs
    ]);
    let language = switchedLanguage.headerText

    useEffect(() => {
        if (userData.colorOfIcon !== color) {
            setColor(userData.colorOfIcon);
        }
    }, [userData]);

    useEffect(() => {
        setUserData({stars: userData.stars, colorOfIcon: color});
    }, [color])

    function saveSettings() {
        const finalSettingsValues = settingsValue.map(Number);
        if (finalSettingsValues.every(n => Number.isFinite(n))) {
            setSettings({makeWordFromLettersInputs: finalSettingsValues[0], makeWordInputs: finalSettingsValues[1], makeSentenceInputs: finalSettingsValues[2]})
            setSettingsValue(finalSettingsValues);
            setVisibleSettingsModal(!visibleSettingsModal);
        } else {
            setVisibleSettingsModal(false)
            setVisibleMessageModal(true);
            setTimeout(() => setVisibleMessageModal(false), 5000);
        }
    }

    function changeLanguage() {
        if (switchedLanguage === en) {
            setSwitchedLanguage(ru)
        } else {
            setSwitchedLanguage(en)
        }
    }

    return (
        <header className={cl.header}>
            <Modal
                visible={visibleUpdateStarsModal} setVisible={setVisibleUpdateStarsModal}
                children={
                    <div>
                        <Text text={language.updateModalText.questionText} w='100%' marginTop='0'/>
                        <Btn btnName={language.updateModalText.okBtnText} width='100%' callback={() => {
                            setVisibleUpdateStarsModal(false)
                            setUserData({stars: 0, colorOfIcon: 'skyblue'})
                        }} height='20%' left='0'/>
                    </div>
                }
            />

            <Modal
                children={<Text text={language.massageAboutNotCorrectSettingsText} w='100%' marginTop='0'/>}
                setVisible={setVisibleMessageModal} visible={visibleMessageModal}
            />

            <Modal
                children={<SwitchPlayerColor setColor={setColor} setVisibleModal={setVisibleSetColorsModal}/>}
                visible={visibleSetColorsModal}
                setVisible={setVisibleSetColorsModal}
            />

            {location.pathname === '/lesson' && (
                <div className={cl.infoColumn}>
                    <img src={heartImg} alt="hearts"/>
                    <Text text={Math.floor(livesOfLesson)} w='100%' marginTop='0'
                          newStyles={{wordWrap: 'break-word', overflowWrap: 'break-word', maxWidth: '50%'}}/>
                </div>
            )
            }

            <div className={cl.infoColumn}>
                <img src={StarImg} alt="hearts"/>
                <Text text={userData.stars} w='100%' marginTop='0'
                      newStyles={{wordWrap: 'break-word', overflowWrap: 'break-word', maxWidth: '50%'}}/>
                <Btn btnName={language.updateBtnText} width='4vw' height='fit-content' left='-10%'
                     callback={() => setVisibleUpdateStarsModal(true)}/>
            </div>

            <button className={cl.modalBtn} onClick={() => setVisibleSetColorsModal(true)}>
                <PlayerChip className={cl.playerChip} color={color}/>
            </button>


            <Modal visible={visibleSettingsModal} setVisible={setVisibleSettingsModal} children={(
                <div>
                    <Input width='90%' value={settingsValue[0]} placeholder={settings.makeWordFromLettersInputs}
                           onChange={e => setSettingsValue(prev => {
                               const newArr = [...prev];
                               newArr[0] = e.target.value;
                               return newArr;
                           })}/>
                    <Text text={language.settingsText.makeWordLessonSetting}/>
                    <hr/>
                    <Input width='90%' value={settingsValue[1]} placeholder={settings.makeWordInputs}
                           onChange={e => setSettingsValue(prev => {
                               const newArr = [...prev];
                               newArr[1] = e.target.value;
                               return newArr;
                           })}/>
                    <Text text={language.settingsText.makeWordFromLettersSetting}/>
                    <hr/>
                    <Input width='90%' value={settingsValue[2]} placeholder={settings.makeSentenceInputs}
                           onChange={e => setSettingsValue(prev => {
                               const newArr = [...prev];
                               newArr[2] = e.target.value;
                               return newArr;
                           })}/>
                    <Text text={language.settingsText.makeSentenceSetting}/>
                    <hr/>
                    <Btn btnName='OK' width='100%' callback={saveSettings} left='0' height='7vh'/>
                </div>
            )}/>


            {location.pathname !== '/words' && location.pathname !== '/lesson' && (
                <button onClick={() => setVisibleSettingsModal(true)} className={cl.modalBtn}>
                    <img src={settingsImg} alt="settings" className={cl.modalBtn}/>
                </button>
            )
            }

            <Btn btnName={switchedLanguage === en ? 'english' : 'русский'} width='4vw' left='20%' callback={changeLanguage} height='fit-content'/>
        </header>
    );
};

export default Header;