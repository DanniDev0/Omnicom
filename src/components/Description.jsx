import React from 'react';
import '../assets/style/Description.css'

export const Description = ({ text }) => {
  return (
    <p className="description-container animate__animated animate__fadeInUp">
      {text}
    </p>
  );
};

export default Description;