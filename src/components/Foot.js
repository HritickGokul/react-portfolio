import '../assets/css/Foot.css';
import whatsapp from '../assets/images/whatsapp.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <div className="container">
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
                <p>Hrithick Gokul Y</p>
            </footer>
        </div>
    );
}

export default Foot;
