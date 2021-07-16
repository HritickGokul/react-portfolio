import '../assets/css/Nav.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

function Nav() {
    return (
        <div className="container">
            <div className="nav-bar">
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link> */}
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Home</Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >About</Link>
                <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Blog</Link>
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Portfolio</Link>
                {/* <a href="#intro">Home</a>
                <a href="#about">About</a>
                <a href="#blog">blog</a>
                <a href="#portfolio">portfolio</a> */}
            </div>
        </div>
    );
}

export default Nav;
