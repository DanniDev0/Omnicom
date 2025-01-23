import React from 'react';
import '../assets/style/CardTeam.css';

export const CardTeam = ({ image, name, description, jobPosition }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="cargo">{jobPosition}</p>
        <div className="social-icons">
          <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
