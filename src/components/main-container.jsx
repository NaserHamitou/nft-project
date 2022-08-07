import './main-container.scss';
import NftComponent from './nft-component';
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { ethers, BigNumber } from 'ethers';
import nasWorldNFT from '../NasWorldNFT.json';

const nasWorldNFTAddress = "0xb6845CB3A8c4Cd194317622EEd124591a3EfdBB0";

const Main = () => {

    const nftRef = useRef();
    const [accounts, setAccounts] = useState([]);
    const isConnected = Boolean(accounts[0]);

    const loadMint = async () => {
        await handleMint().then(() => {
            document.getElementById('fill').style.display = 'none';
            setTimeout(() => {document.getElementById('fill').style.display = 'block'}, 200);
            nftRef.current.callGenerateChar();
        }).catch((err) => {
            console.log('Error: ', err);
        });
    }

   async function handleMint() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            nasWorldNFTAddress,
            nasWorldNFT.abi,
            signer
        );
        try {
            const response = await contract.mint(BigNumber.from("1"));
            console.log('response: ', response);
        } catch(err) {
            console.log('Error: ', err)
        }
    }
   }

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return(
        <>
            <main>
                { !isConnected ? (
                <div id="welcome-mask">
                    <center>
                        <div id="connect-container">
                            {/* <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                                <div style={{marginRight: '15px', border: '2px solid black', borderRadius: '5px', padding: '4px'}}>Close</div>
                            </div> */}
                            <h2> Welcome !</h2>
                            <p>Please connect to your MetaMask account to mint.
                                <br/> 
                                Don't worry it's completely free! 🙌
                            </p>
                            <hr/>
                            <p>
                                <b>NOTE:</b> If you have any questions about
                                 how blockchain works, click the help button bellow. 👇
                            </p>
                            <button id="connect" onClick={connectAccount}>Connect  to MetaMask</button> <Link to='/help' role='button' id='help'>Help/FAQ</Link>
                        </div>
                    </center>
                </div> 
                ) : (<></>)
                }
                <header>
                    <h1>Nas World</h1>
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
                            <button style={{width: '25%'}} onClick={loadMint}>Mint</button>
                        </div>
                    </div>
                </center>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </main>
        </>
    )
}

export default Main;