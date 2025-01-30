import React from 'react';
import '../assets/style/Titleh2.css';

export const Titleh2 = ({ text }) => {
  return (
    <div className="title-container">
      <h2 className="secondary-title">{text}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Titleh2;
