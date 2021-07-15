import React from 'react';
import './assets/css/About.css';
import edulogo from './assets/images/education_logo.png'

function About() {
    return (
        <div className="about">
            <div className="interests">
                <h1>Interests</h1>
                <div className="interests-grid">
                    <div className="int-item"><p>Machine Learning</p></div>
                    <div className="int-item"><p>Deep Learning</p></div>
                    <div className="int-item"><p>Data Science</p></div>
                    <div className="int-item"><p>Web Development</p></div>
                </div>
            </div>
            <div className="education">
                <div className="edu-grid">
                    <div className="edu-icon">
                        <div className="eduicon-grid">
                            <div className="dummyedu1"></div>
                            <div className="dummyedu2"></div>
                            <div className="eduimage"><img src={edulogo} className="edu_logo"></img></div>
                        </div>
                    </div>
                    <div className="edu-para">
                        <p className="heading">I write Blogs!</p>
                        <p>Here are some of the articles I've written</p>
                        <p className="showme">Show me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
