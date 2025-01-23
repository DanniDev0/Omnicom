import React from 'react';
import '../assets/style/ObjectiveSection.css';
export const ObjectiveSection = ({ title, text, imgSrc, animationTitle, animationText, animationImg }) => {
  return (
    <div className="objective">
      <h2 className={`animate__animated ${animationTitle}`}>{title}</h2>
      <p className={`animate__animated ${animationText}`}>{text}</p>
      <img src={imgSrc} alt={title} className={`animate__animated ${animationImg}`} />
    </div>
  )
}

export default ObjectiveSection;