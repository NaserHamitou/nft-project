import './main-container.scss';
import NftComponent from './nft-component';
import React, { useRef } from "react";

const Main = () => {

    const nftRef = useRef()

    const loadMint = () => {
        document.getElementById('fill').style.display = 'none';
        setTimeout(() => {document.getElementById('fill').style.display = 'block'}, 200);
        nftRef.current.callGenerateChar();
    }

    return(
        <>
            <main>
                <header>
                    <h1> Pic Factory</h1>
                </header>
                <center>
                    <div id="container">
                        <div id="img-container">
                            <NftComponent ref={nftRef}></NftComponent>
                        </div>
                        <div id="dashboard">
                            <label>
                                <div id="fill"></div>
                            </label>
                            <button onClick={loadMint}>Mint</button>
                        </div>
                    </div>
                </center>
            </main>
        </>
    )
}

export default Main;