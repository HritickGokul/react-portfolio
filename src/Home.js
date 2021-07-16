import logo from './assets/images/hrithick.jpg';
import smiley1 from './assets/images/smiley1.png'
import smiley2 from './assets/images/smiley2.png'
import smiley3 from './assets/images/smiley3.png'
import biologo from './assets/images/biologo.png'
import edulogo from './assets/images/education_logo.png'
import './assets/css/Home.css';
import { Link } from "react-scroll";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="intro" id="home">
                <div className="item1">
                    <h1>Hrithick Here!</h1>
                    <p>Glad you stopped by. This is my portfolio sight. Hope you like it.</p>
                    <div className="emojis">
                        <div className="sm1"><img src={smiley1} className="smiley1" alt="none"></img></div>
                        <div className="sm2"><img src={smiley2} className="smiley2" alt="none"></img></div>
                        <div className="sm3"><img src={smiley3} className="smiley3" alt="none"></img></div>
                    </div>
                </div>
                <div className="item2">
                    <div className="item2-grid">
                        <div className="dummy1"></div>
                        <div className="myimage"><img src={logo} className="my_image" alt="none"></img></div>
                        <div className="dummy2"></div>
                    </div>
                </div>
            </div>
            <div className="bio" id="about">
                <div className="bio-icon">
                    <div className="bioicon-grid">
                        <div className="dummybio1"></div>
                        <div className="bioimage"><img src={biologo} className="bio_logo" alt="none"></img></div>
                        <div className="dummybio2"></div>
                    </div>
                </div>
                <div className="bio-para">
                    <h1>Who am I?</h1>
                    <ul>
                        <li>I am a junior year undergraduate student pursuing Computer Science and Engineering at Rajalakshmi Institute of Technology, Chennai. </li>
                        <li>My interest lies in Machine Learning, Deep Learning, AI, and Web Development.</li>
                        <li>I have experience with computer science for
                            over 2 years. I am now adept with technical abilities, including languages (Python, NumPy, pandas), development tools(Jupyter
                            Notebook, Atom), frameworks(Django, scikit-learn, OpenCV), Machine Learning, and Mathematics for Machine Learning</li>
                    </ul>
                </div>
            </div>
            <div className="interests">
                <h1>Interests</h1>
                <div className="interests-grid">
                    <div className="int-item"><p>Machine Learning</p></div>
                    <div className="int-item"><p>Deep Learning</p></div>
                    <div className="int-item"><p>Data Science</p></div>
                    <div className="int-item"><p>Web Development</p></div>
                </div>
            </div>
            <div className="education" id="blog">
                <div className="edu-grid">
                    <div className="edu-icon">
                        <div className="eduicon-grid">
                            <div className="dummyedu1"></div>
                            <div className="dummyedu2"></div>
                            <div className="eduimage"><img src={edulogo} className="edu_logo" alt="none"></img></div>
                        </div>
                    </div>
                    <div className="edu-para">
                        <p className="heading">I write Blogs!</p>
                        <p>Here are some of the articles I've written</p>
                        <p className="showme">Show me</p>
                    </div>
                </div>
            </div>
            <div className="portfolio" id="portfolio">
                <h1 className="heading">Portfolio</h1>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <h1>My Skills</h1>
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>Numpy</li>
                            <li>Scikitlearn</li>
                            <li>Pandas</li>
                        </ul>
                    </div>
                    <div className="portfolio-item blue">
                        <h1>Exerience</h1>
                        <ul>
                            <li>Full Stack Development Intern</li>
                            <li>Vugha Tehnologies</li>
                        </ul>
                    </div>
                    <div className="portfolio-item blue">
                        <h1>Certifications</h1>
                        <ul>
                            <li>Python Djnago Web Development</li>
                            <li>Neural Networks</li>
                            <li>Hyperparamaters in Neural Networks</li>
                            <li>Structuring ML Projects</li>
                            <li>Convolutional Neural Networks</li>
                        </ul>
                    </div>
                    <div className="portfolio-item">
                        <h1>Projects</h1>
                        <ul>
                            <li>Automated Attendance System</li>
                            <li>The Social Network</li>
                            <li>Face Recognition</li>
                            <li>Credit Card Fraudulent Detection</li>
                            <li>Portfolio Website</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Link
                id="myBtn"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Top</Link>
        </div>
    );
}

export default Home;
