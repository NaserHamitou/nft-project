import './main-container.scss';

const Main = () => {

    const loadMint = () => {
        document.getElementById('fill').style.display = 'block';
    }

    return(
        <>
            <main>
                <header>
                    <h1> Image Generator !</h1>
                </header>
                <center>
                    <div id="container">
                        <div id="img-container">

                        </div>
                        <div id="dashboard">
                            <label>
                                <div id="fill"></div>
                            </label>
                            <button onClick={loadMint}>create !</button>
                        </div>
                    </div>
                </center>
            </main>
        </>
    )
}

export default Main;