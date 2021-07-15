import logo from './assets/images/hrithick.jpg';
import smiley1 from './assets/images/smiley1.png'
import smiley2 from './assets/images/smiley2.png'
import smiley3 from './assets/images/smiley3.png'
import biologo from './assets/images/biologo.png'
import './assets/css/Home.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="intro">
                <div className="item1">
                    <h1>Hrithick Here!</h1>
                    <p>Glad you stopped by. This is my portfolio sight. Hope you like it.</p>
                    <div className="emojis">
                        <div className="sm1"><img src={smiley1} className="smiley1"></img></div>
                        <div className="sm2"><img src={smiley2} className="smiley2"></img></div>
                        <div className="sm3"><img src={smiley3} className="smiley3"></img></div>
                    </div>
                </div>
                <div className="item2">
                    <div className="item2-grid">
                        <div className="dummy1"></div>
                        <div className="myimage"><img src={logo} className="my_image"></img></div>
                        <div className="dummy2"></div>
                    </div>
                </div>
            </div>
            <div className="bio">
                <div className="bio-icon">
                    <div className="bioicon-grid">
                        <div className="dummybio1"></div>
                        <div className="bioimage"><img src={biologo} className="bio_logo"></img></div>
                        <div className="dummybio2"></div>
                    </div>
                </div>
                <div className="bio-para">
                    <h1>Who am I?</h1>
                    <ul>
                        <li>I am a junior year undergraduate student pursuing Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai. </li>
                        <li>I am a junior year undergraduate student pursuing Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai. </li>
                        <li>I am a junior year undergraduate student pursuing Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai. </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
