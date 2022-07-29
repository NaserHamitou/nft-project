import baseModel from "../res/nft/base-model.png";
import React from "react";
import './nft-component.css';
import { useState } from "react";
import { getFace } from "../storage/storage-manager";



const NftComponent = () => {

    const [test, setTest] = useState('TEST');
    const [eyesURL, setEye] = useState('');
    const [hairURL, setHair] = useState('');
    const [noseURL, setNose] = useState('');
    const [mouthURL, setMouth] = useState('');

    let faceMap = new Map<string, string>()

    const getFacePartURL = (facePart: string) => {
        return faceMap.get(facePart) as string;
    }

    const generateCharacter = async () => {
        faceMap = await getFace();
        setEye(getFacePartURL('eyes'));
        setHair(getFacePartURL('hair'));
        setNose(getFacePartURL('nose'));
        setMouth(getFacePartURL('mouth'));
        setTest('GENERATED');
      
    }

    return(
        <>
            <img id="base-model" src={baseModel} alt="error"></img>
            <img className="layers" id="eyes" src={eyesURL} alt="error"></img>
            <img className="layers" id="eyes" src={hairURL} alt="error"></img>
            <img className="layers" id="eyes" src={noseURL} alt="error"></img>
            <img className="layers" id="eyes" src={mouthURL} alt="error"></img>
            <button onClick={async () => await generateCharacter()}> {test} </button>
        </>
    )
}

export default NftComponent;