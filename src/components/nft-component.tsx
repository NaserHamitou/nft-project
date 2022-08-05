import baseModel from "../res/nft/base-model.png";
import React from "react";
import './nft-component.css';
import { useState, forwardRef, useImperativeHandle } from "react";
import { getFace } from "../storage/storage-manager";

const NftComponent = forwardRef((props, ref) => {

    const [eyesURL, setEye] = useState('');
    const [hairURL, setHair] = useState('');
    const [noseURL, setNose] = useState('');
    const [mouthURL, setMouth] = useState('');

    useImperativeHandle(ref, () => ({
        async callGenerateChar() {
            await generateCharacter();
            const layers = document.getElementsByClassName('layers');
            Array.from(layers as HTMLCollectionOf<HTMLImageElement>).forEach((layer) => {
                layer.style.visibility = 'visible';
            });
            const button = document.getElementById('download-button') as HTMLElement;
            button.style.display = 'block';
        }
    }));

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
    }

    const downloadImage = () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        const layers = document.getElementsByClassName('layers');
        context.drawImage(document.getElementById('base-model') as HTMLImageElement, 0, 0);
        Array.from(layers as HTMLCollectionOf<HTMLImageElement>).forEach((layer) => {
            context.drawImage(layer, 0, 0);
        });
        const link = document.createElement('a');
        link.download  = 'Generated_pic.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
        link.remove();
    }

    return(
        <>
            <img crossOrigin="anonymous" id="base-model" src={baseModel} alt="error"></img>
            <img crossOrigin="anonymous" className="layers" id="eyes" src={eyesURL} alt="error"></img>
            <img crossOrigin="anonymous" className="layers" id="eyes" src={hairURL} alt="error"></img>
            <img crossOrigin="anonymous" className="layers" id="eyes" src={noseURL} alt="error"></img>
            <img crossOrigin="anonymous" className="layers" id="eyes" src={mouthURL} alt="error"></img>
            <button onClick={() => {downloadImage()}} id="download-button"> Download 🡇 </button>
            <canvas height={256} width={256} id="canvas"></canvas>
        </>
    )
});

export default NftComponent;