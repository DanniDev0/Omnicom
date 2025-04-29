import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/ButtonPrice.css';

const ButtonPrice = ({ Text, page }) => {
  return (
    <div className='btn-price'>
      <Link to={page}>
        <span>{Text}</span>
      </Link>    
    </div>
  )
}

export default ButtonPrice;
