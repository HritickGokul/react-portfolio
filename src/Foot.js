import './App.css';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <div className="container">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
                <span class="material-icons-outlined">
                    sentiment_very_satisfied
                </span>
            </head>
            <footer>
                <div className="socials">
                    <div className="ft1"></div>
                    <div className="ft2">
                        <div className="social-link">
                            <div className="instagram"><img src={instagram} className="instagram"></img></div>
                            <div className="linkedin"><img src={linkedin} className="linkedin"></img></div>
                            <div className="whatsapp"><img src={whatsapp} className="whatsapp"></img></div>
                            <div className="twitter"><img src={twitter} className="twitter"></img></div>
                        </div>
                    </div>
                    <div className="ft3"></div>
                </div>
                <p>Copyright Hrithick Gokul Y</p>
            </footer>
        </div>
    );
}

export default Foot;
