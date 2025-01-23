import React from 'react';
import '../assets/style/NoInternet.css';
import errorGif from '../assets/img/no-internet-gif.gif';
import Button from './Button';

export const NoInternet = () => {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="no-internet-container">
            <div className="no-internet-content">
                <h1>¡Ooops! No Internet</h1>
                <p className="error-code">Error 503</p>
                <div className="retry-button" onClick={handleRetry}>
                    <Button text="Try Again" />
                </div>
            </div>
            <div className="no-internet-gif">
                <img src={errorGif} alt="Error GIF" />
            </div>
        </div>
    );
};

export default NoInternet;
