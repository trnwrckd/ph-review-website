import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle as loginIcon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid bg-gray">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" height="70" />
                </a>
                <div>
                    <button className="navbar-toggler mx-5 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                            <div className="d-flex align-items-center">
                                <li className="nav-item ps-lg-3 pe-2">
                                    <button className="btn text-light"><button className="login-btn me-1"><FontAwesomeIcon icon={loginIcon}></FontAwesomeIcon></button> Login</button>
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