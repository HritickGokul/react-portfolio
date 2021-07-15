import '../assets/css/Nav.css';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="container">
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
