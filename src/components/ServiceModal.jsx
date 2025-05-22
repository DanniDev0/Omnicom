import React from 'react';
import styles from '../assets/style/ServiceModal.module.css';
import { useNavigate } from 'react-router-dom';

const descriptions = {
  'Electrical Installations': 'We provide a full range of electrical services for both residential and commercial properties.',
  'HVAC': 'Installation and maintenance of heating, ventilation, and air conditioning systems.',
  'Repairs & Cleaning': 'We repair electrical systems and clean panels and installations.',
  'Residential & Commercial': 'Serving homes and businesses with safe and efficient electrical solutions.'
};

const ServiceModal = ({ service, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        <h2>{service}</h2>
        <p>{descriptions[service]}</p>
        <button
          className={styles.quoteButton}
          onClick={() => navigate('/contact_us')}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;