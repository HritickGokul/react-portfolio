import React from 'react';
import './assets/css/Portfolio.css';
import pylibs from './assets/images/python_libraries.png'


function Portfolio() {
    return (
        <div className="portfolio">
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
                        <li>Hi Hello Haha Wow</li>
                        <li>Hi Hello Haha Wow</li>
                        <li>Hi Hello Haha Wow</li>
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
    );
}

export default Portfolio;
