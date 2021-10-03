import React from 'react';
import './About.css';
import image from './learning.png';
const About = () => {
    return (
        <div className="d-flex py-5 my-5">
            <div>
                <h1>About Us</h1>
                <p>Learn from home.</p>
                <p>EduPassion is a platform where you can come to fullfill your learning needs. From design to programming, even the most complicated of the topics are taught with care in our platform.</p>
                <p>Earn certificates that you can add to your LinkedIn with just a click.</p>
                <h4>follow our newsletter or something like that</h4>
                <button> subcribe</button>
            </div>
            <div><img src={image} alt="" /></div>
        </div >
    );
};

export default About;