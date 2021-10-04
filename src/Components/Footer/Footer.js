import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container py-5">
                <div className="d-flex justify-content-between">

                    <div className="d-flex flex-column">
                        <span className="footer-link">Become an Instructor</span>
                        <span className="footer-link">Download app</span>
                        <span className="footer-link">About us</span>
                        <span className="footer-link">Contact us</span>
                    </div>

                    <div className="d-flex flex-column">
                        <span className="footer-link">FAQ</span>
                        <span className="footer-link">Terms</span>
                        <span className="footer-link">Privacy</span>
                        <span className="footer-link">Help</span>
                    </div>

                    <div className="d-flex flex-column justify-content-between">
                        <div className="footer-social">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                        <p><small>© 2021 EduPassion Inc. All rights reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;