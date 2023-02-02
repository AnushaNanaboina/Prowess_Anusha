import './CSS/challenges.css'
function Challenges() {
    return (
        <div class="main-ctn">
            <div className="title-ctn">
                <h1 align="center">Challenges</h1>
            </div>
            <div className="pro-ctn">
                <h2>Programming</h2>
                <div className='pro-cards'>
                    <div class="column">
                        <div class="card">
                            {/* <h3>Card 3</h3> */}
                            <p>Server Addition!</p>
                            <p>15</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">

                            <p>Reverse Gear!</p>
                            <p>15</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Maths Beauty!</p>
                            <p>95</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="li-ctn">
                <h2>Linux</h2>
                <div className='li-cards'>
                    <div class="column">

                        <div class="card">

                            <p>Read File</p>
                            <p>10</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Hidden Files</p>
                            <p>20</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>Unique Flag</p>
                            <p>20</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <p>pain in a dash!</p>
                            <p>25</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">

                            <p>Eleven</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Challenges