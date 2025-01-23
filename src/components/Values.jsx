import React from 'react';
import '../assets/style/Values.css';

export const Values = ({ Title, Parrafo, Image }) => {
    return (
        <div className="value-item animate__animated animate__zoomInDown">
            <div className="value-content">
                <h3>{Title}</h3>
                <p>{Parrafo}</p>
            </div>
            <img src={Image} alt={Title} className="value-image" />
        </div>
    );
};

export default Values;
