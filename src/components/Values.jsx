import React from 'react';
import '../assets/style/Values.css';
import Verificacion from '../assets/img/Verificacion.png';

export const Values = ({ Title, Parrafo }) => {
    return (
        <div>
            <div className="values-container">
                <img src={Verificacion} alt="Icono" />
                <div className="values-content">
                    <h3>{Title}</h3>
                    <p>{Parrafo}</p>
                </div>
            </div>
        </div>
    );
};

export default Values;
