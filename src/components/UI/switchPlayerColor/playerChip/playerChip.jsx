import React from 'react';
import cl from './playerChip.module.css'

const PlayerChip = ({color = 'green'}) => {
    switch (color) {
        case "red":
            color = ["red", 'darkred'];
            break;
        case "orange":
            color = ["orange", 'darkorange'];
            break;
        case "yellow":
            color = ["yellow", 'gold'];
            break;
        case "green":
            color = ["green", 'darkgreen'];
            break;
        case "skyblue":
            color = ["skyblue", 'blue'];
            break;
        case "purple":
            color = ["#CC66DA", '#9929EA'];
            break;
        case "brown":
            color = ["#FFF7C5", 'brown'];
            break;
        case "grey":
            color = ["grey", 'darkgrey'];
            break;
        case "black":
            color = ['darkgrey', "#E8EDF2"];
            break;
    }
    return (
        <div className={cl.playerChip}>
            <div style={{background: color[1]}} className={cl.chip}>
                <div style={{background: color[0]}} className={cl.shadow}></div>
                <div className={cl.eyes}>
                    <div className={cl.eye}>
                        <div className={cl.pupil}/>
                    </div>
                    <div className={cl.eye}>
                        <div className={cl.pupil}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerChip;