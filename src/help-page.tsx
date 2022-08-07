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
                        Reponse
                    </div>
                </div>
                
                <div className="faq-question">
                    <input id="q2" type="checkbox" className="panel"/>
                    <div className="plus">❯</div>
                    <label htmlFor="q2" className="panel-title">Do I have to pay anything?</label>
                    <div className="panel-content">Reponse</div>
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