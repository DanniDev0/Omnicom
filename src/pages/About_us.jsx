import React from 'react';
import '../assets/style/About_us.css';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsGrid from '../components/TestimonialsGrid';
import CallToAction from '../components/CallToAction';
import Picture_AboutUs from '../assets/img/Picture_AboutUs.JPG'; 

export const About_us = () => {
  return (
    <div className="about-container">
      <img src={Picture_AboutUs} alt="Electricista trabajando" className="about-header-image" />
      <ServicesSection />
      <WhyChooseUs/>
      <TestimonialsGrid />
      <CallToAction />
    </div>
  );
};

export default About_us;