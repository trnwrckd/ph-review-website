import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item pe-2">
                            <NavLink to='/home'> Home</NavLink>
                        </li>
                        <li className="nav-item pe-2">
                            <NavLink to='/about'> About</NavLink>
                        </li>
                        <li className="nav-item pe-2">
                            <NavLink to='/services'> Services</NavLink>
                        </li>
                        <li className="nav-item pe-2 ">
                            <NavLink to='/review'> Reviews</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;