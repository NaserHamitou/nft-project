import './main-container.scss';
import NftComponent from './nft-component';

const Main = () => {

    const loadMint = () => {
        document.getElementById('fill').style.display = 'block';
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
                            <NftComponent></NftComponent>
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