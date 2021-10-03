import React from 'react';
import './NotFound.css';
import image from '../../NotFound.png';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const goToHome = () => {
        history.push("/home");
    }

    return (
        <div className="not-found">
            {/* <img src={image} alt="" /> */}
            <p>404</p>
            <button onClick={() => goToHome()} >Go Back To home</button>
        </div>
    );
};

export default NotFound;