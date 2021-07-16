import '../assets/css/Foot.css';
import whatsapp from '../assets/images/whatsapp.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Foot() {
    return (
        <div className="container">
            <footer>
                <div className="socials">
                    <div className="ft1"></div>
                    <div className="ft2">
                        <div className="social-link">
                            <div className="instagram"><a href="https://www.instagram.com/"><img src={instagram} className="instagram" alt="none"></img></a></div>
                            <div className="linkedin"><a href="https://www.linkedin.com/"><img src={linkedin} className="linkedin" alt="none"></img></a></div>
                            <div className="whatsapp"><a href="https://www.whatsapp.com/?lang=en"><img src={whatsapp} className="whatsapp" alt="none"></img></a></div>
                            <div className="twitter"><a href="https://twitter.com/?lang=en"><img src={twitter} className="twitter" alt="none"></img></a></div>
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
