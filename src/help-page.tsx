import React from "react";
import './help-page.css';


const HelpPage = () => {



    return(
    <>
        <div id='background'>
        <main id='help-main'>

            <h1>Help Page</h1>

            <div className="faq-content">
                <div className="faq-question">
                    <input id="q1" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q1" className="panel-title">How does it work?</label>
                    <div className="panel-content">
                        This is web3 application allows you to own a randomly generated NFT 
                        with a process called minting.
                        1. Step one: Add the 
                        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" 
                        target="_blank" rel="noopener noreferrer">
                            MetaMask
                        </a> 
                        plugin in your browser 
                    
                        After login into your MetaMask account, press the mint button to
                        randomly generate a character. It will open up MetaMask to confirm the transaction which in this
                        case will be free. Once the crypto transaction succeeds, you will be able to download the character and you will 
                        receive a unique URI of the minted NFT that you'll own and will be linked to your MetaMask account.
                    </div>
                </div>
                
                <div className="faq-question">
                    <input id="q2" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q2" className="panel-title">Do I have to pay anything?</label>
                    <div className="panel-content">This web3 application is enterely free. The contract used to process the
                        transaction is deployed on the Rinkedby Testnet which uses simulated ethereum </div>
                </div>
                
                <div className="faq-question">
                    <input id="q3" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q3" className="panel-title">Why do I need MetaMask?</label>
                    <div className="panel-content">Reponse</div>
                </div>
            </div>
        </main>
        </div>
    </>
    )
}

export default HelpPage;