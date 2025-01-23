import React from 'react';
import '../assets/style/Button.css';

const Button = ({ text }) => {
  return (
    <button className="btn">
      {text}
    </button>
  );
};

export default Button;