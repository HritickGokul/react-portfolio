import logo from './hrithick.jpg';
import smiley1 from './smiley1.png'
import smiley2 from './smiley2.png'
import smiley3 from './smiley3.png'
import whatsapp from './whatsapp.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import './App.css';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
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
        <div className="nav-bar">
          <a>Home</a>
          <a>About</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </div>
        <div className="grid-container">
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
            <img src={logo} className="my_image"></img>
          </div>
        </div>
        <div className="summa">
          <h1>Summa</h1>
        </div>
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

export default App;
