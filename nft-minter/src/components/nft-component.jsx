import baseModel from "../res/nft/base-model.png";
import eyes1 from "../res/nft/eyes/eyes-4.png"
import hair from '../res/nft/hair/hair-4.png'
import nose from '../res/nft/nose/nose-1.png';
import mouth from '../res/nft/mouth/m-3.png'
import './nft-component.css';
import { useState } from "react";



const NftComponent = () => {

    const [test, setTest] = useState('TEST');
    const [eyes, setEye] = useState(eyes1);

    
    const randomize = () => {
        setTest('TEST SUCCEED');
        setEye('https://reactjs.org/logo-og.png');
    }

    return(
        <>
            <img id="base-model" src={baseModel} alt="error"></img>
            <img className="layers" id="eyes" src={eyes} alt="error"></img>
            <img className="layers" id="eyes" src={hair} alt="error"></img>
            <img className="layers" id="eyes" src={nose} alt="error"></img>
            <img className="layers" id="eyes" src={mouth} alt="error"></img>
            <button onClick={() => randomize()}> {test} </button>
        </>
    )
}

export default NftComponent;