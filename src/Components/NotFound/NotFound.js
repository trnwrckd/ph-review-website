import React from 'react';
import { useHistory } from 'react-router';

import image from '../../NotFound.png';
import '../../common.css';

const NotFound = () => {

    const history = useHistory();
    const goToHome = () => {
        history.push("/home");
    }

    return (
        <div className="container py-5 my-5 my-lg-0 py-lg-0">
            <div className="d-flex flex-column align-items-center pt-3 my-5 my-lg-0">
                <img src={image} alt="" className="img-fluid" />
                <p className="py-2 fs-5">The page you requested doesn't exist.</p>
                <div className="py-2 mb-5 mb-md-0">
                    <button className="btn-generic btn-red" onClick={() => goToHome()} >Go Back To home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;