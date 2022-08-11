import React from "react";
import './help-page.css';
import network from './res/network.jpg';
import back from './res/back.png';
import { Link } from "react-router-dom";


const HelpPage = () => {



    return(
    <>
        <div id='background'>
        <main id='help-main'>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Link to='/home' role='button'>
                    <div style={{margin: '20px'}}>
                        <img src={back} alt=''></img>
                    </div>
                </Link>
            </div>
            <h1>Help Page</h1>

            <div className="faq-content">
                <div className="faq-question">
                    <input id="q1" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q1" className="panel-title">How does it work?</label>
                    <div className="panel-content">
                        This web3 application allows you to own a randomly generated NFT 
                        with a process called minting.
                        <br></br>
                        1. Add the&nbsp; 
                        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" 
                        target="_blank" rel="noopener noreferrer">
                            MetaMask
                        </a>&nbsp; 
                        plugin to your browser.
                        <br></br>
                        2. Create an account and login to your MetaMask account.
                        <br></br>
                        3. Click on the network list on top.
                        <br></br>
                        <img src={network} alt=''></img>
                        <br></br>
                        3. Click Add Network which will take you to a new page where you will enter thess informations:
                        <br></br>
                        <ul style={{marginBottom: '0px'}}>
                            <li>Network Name: Rinkeby Test Network</li>
                            <li>New RPC URL: https://rinkeby.infura.io/v3/</li>
                            <li>ChainID: 4</li>
                            <li>Currency Symbol: ETH</li>
                            <li>Block Explorer URL: https://rinkeby.etherscan.io</li>
                        </ul>
                        <br></br>
                        4. Select the Rinkeby Test Network on your MetaMask wallet.
                        <br></br>
                        5. Make sure to add some currency to your Account using the&nbsp; 
                        <a href="https://rinkebyfaucet.com/" target="_blank" rel="noopener noreferrer">Rinkeby Faucet</a>.
                        <br></br>
                        You're all set now! 🤟
                    </div>
                </div>
                
                <div className="faq-question">
                    <input id="q2" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q2" className="panel-title">Do I have to pay anything?</label>
                    <div className="panel-content">This web3 application is enterely free. The contract used to process the
                        transaction is deployed on the Rinkedby Testnet which uses simulated ethereum. </div>
                </div>
                
                <div className="faq-question">
                    <input id="q3" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q3" className="panel-title">Why do I need MetaMask?</label>
                    <div className="panel-content">MetaMask is a crypto currency wallets that lets you 
                    interact with the ethereum blockchain. It is used to facilitate the 
                    transaction between the user minting the NFT and the contract owner. Keep in mind that 
                    we are using the Rinkeby test network, so all transactions are done with simutilated 
                    ethereum that can be acquired for free.</div>
                </div>
            </div>
        </main>
        </div>
    </>
    )
}

export default HelpPage;