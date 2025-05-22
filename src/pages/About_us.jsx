import React from 'react';
import '../assets/style/About_us.css';
import ServicesSection from '../components/ServicesSection';
import Picture_AboutUs from '../assets/img/Picture_AboutUs.JPG'; 

export const About_us = () => {
  return (
    <div className="about-container">
      <img src={Picture_AboutUs} alt="Electricista trabajando" className="about-header-image" />
      <ServicesSection />
    </div>
  );
};

export default About_us;