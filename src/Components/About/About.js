import React from 'react';
import './About.css';
import image from './learning.png';
import '../../common.css';

const About = () => {
    return (
        <div className="container py-5 my-5">

            <div className="row row-cols-1 row-cols-md-2 row-reverse">
                <div>
                    <h1>About Us</h1>
                    <p className="about-desc"><span className="logo-text-color">EduPassion</span> is a platform where you can come to fullfill your learning needs. From design to coding, even the most complicated of the topics are taught with care in our platform.</p>
                    <p className="my-2">Learn from home.</p>
                    <p>Earn certificates that you can add to your LinkedIn with just a click.</p>
                    <h5>Follow our newsletter for regular updates.</h5>
                    <button className="btn-generic btn-red mt-3"> Subscribe</button>
                </div>
                <div><img src={image} className="img-fluid" alt="" /></div>
            </div >
        </div >
    );
};

export default About;