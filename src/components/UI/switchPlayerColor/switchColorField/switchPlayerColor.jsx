import React,{useContext} from 'react';
import Context from "../../../../index";
import PlayerChip from "../playerChip/playerChip";
import SwitchColorBtn from "../switchColorButton/switchColorBtn";

const SwitchPlayerColor = ({setColor, setVisibleModal}) => {
    const {colorsArr} = useContext(Context)
    return (
        <div style={{display:'flex'}}>
            {
                colorsArr.map(color => (
                    <div style={{margin: '0 5px'}} key={color}>
                        <SwitchColorBtn setColor={setColor} setVisibleModal={setVisibleModal} color={color} children={<PlayerChip color={color}/>} />
                    </div>
                ))
            }
        </div>
    );
};

export default SwitchPlayerColor;