import React from 'react';
import styles from '../assets/style/ServiceCard.module.css';
import { FaBolt, FaFan, FaWrench, FaBuilding } from 'react-icons/fa';

const icons = {
  'Electrical Installations': <FaBolt />,
  'HVAC': <FaFan />,
  'Repairs & Cleaning': <FaWrench />,
  'Residential & Commercial': <FaBuilding />
};

const ServiceCard = ({ title, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.iconCircle}>
        <div className={styles.icon}>{icons[title]}</div>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default ServiceCard;