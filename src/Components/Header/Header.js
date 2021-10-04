import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle as loginIcon } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid bg-gray">
                <a className="navbar-brand" href="https://flamboyant-shirley-5f5033.netlify.app">
                    <img src={logo} alt="" height="70" />
                </a>
                <div>
                    <button className="navbar-toggler mx-5 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3 mt-lg-0">
                            <li className="nav-item pe-lg-2">
                                <NavLink className="nav-link" activeClassName="active-nav-link" to='/home'> Home</NavLink>
                            </li>
                            <li className="nav-item pe-lg-2">
                                <NavLink className="nav-link" activeClassName="active-nav-link" to='/services'> Services</NavLink>
                            </li>
                            <li className="nav-item pe-lg-2 ">
                                <NavLink className="nav-link" activeClassName="active-nav-link" to='/review'> Reviews</NavLink>
                            </li>
                            <li className="nav-item pe-lg-2">
                                <NavLink className="nav-link" activeClassName="active-nav-link" to='/about'> About</NavLink>
                            </li>
                            <div className="d-flex align-items-center justify-content-center">
                                <li className="nav-item ps-lg-3 pe-2 mt-2 mt-lg-0">
                                    <div className="text-light">
                                        <button className="login-btn me-1">
                                            <FontAwesomeIcon icon={loginIcon}></FontAwesomeIcon>
                                        </button> Login
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;