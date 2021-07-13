import './App.css';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {
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
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Nav;
