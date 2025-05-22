import React, { useState } from 'react';
import styles from '../assets/style/ServicesSection.module.css';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

const services = [
  'Electrical Installations',
  'HVAC',
  'Repairs & Cleaning',
  'Residential & Commercial'
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service} title={service} onClick={() => setSelectedService(service)} />
        ))}
      </div>
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};

export default ServicesSection;