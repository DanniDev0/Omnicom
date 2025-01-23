import React from 'react'
import '../assets/style/Error.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import error from '../assets/img/page-not-found.png'

export const Error = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1>404</h1>
                <h2>Oops! Page not Found</h2>
                <p>The page you are looking for does not exist or has been moved.</p>
                <Link to="/" className="error-link">
                    <Button text="Back to Home" />
                </Link>
            </div>
            <div className="errorimg">
                <img src={error} alt="Page Not Found" />
            </div>
        </div>
    );
};

export default Error;