import React from 'react';
import './NotFound.css';
import image from '../../NotFound.png';
import '../../common.css';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const goToHome = () => {
        history.push("/home");
    }

    return (
        <div className="d-flex flex-column align-items-center pt-3">
            <img src={image} alt="" />
            <p className="py-2 fs-5">The page you requested doesn't exist.</p>
            <div className="py-2"><button className="btn-generic btn-red" onClick={() => goToHome()} >Go Back To home</button></div>
        </div>
    );
};

export default NotFound;