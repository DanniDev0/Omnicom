import React from 'react'
import Button from '../components/Button';
import '../assets/style/SmartEcoControl.css';

export const SmartEcoControl = ({ Image, Name, Description }) => {
    return (
        <div className="product-container animate__animated animate__zoomInDown">
            <img src={Image} alt={Name} className="product-image" />
            <div className="product-price">
                <h4 className='name'>{Name}</h4>
                <p className='description'>{Description}</p>
                <Button text="BUY" />
            </div>
        </div>
    )
}

export default SmartEcoControl;