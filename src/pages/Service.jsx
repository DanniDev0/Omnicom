import React from 'react';
import Title from '../components/Title';
import '../assets/style/Service.css';
import ServiceCard from '../components/ServiceCard';
import GeneralElectricity from '../assets/img/General-Electricity.png';
import HVAC from '../assets/img/HVAC.png';
import RenewableEnergy from '../assets/img/Renewable-Energy.png';
import EnergyEfficiency from '../assets/img/Energy-Efficiency.png';
import Titleh2 from '../components/Titleh2';
import Values from '../components/Values';
import Collaboration from '../assets/img/Collaboration.png';
import Sustainability from '../assets/img/Sustainability.png';
import Quality from '../assets/img/Quality.png';
import Integrity from '../assets/img/Integrity.png';
import Innovation from '../assets/img/Innovation.png';

export const Service = () => {
  return (
    <div>
      <section className="animate-container">
        <Title text="SERVICES" />
        <div className="services-container">
          <ServiceCard
            title='General Electricity'
            description='Electrical installations, maintenance and repairs.'
            image={GeneralElectricity}
            alt='General Electricity'
          />
          <ServiceCard
            title="HVAC"
            description="Installation and maintenance of heating, ventilation and air conditioning systems."
            image={HVAC}
            alt="HVAC"
          />
          <ServiceCard
            title="Renewable energy"
            description="Implementation of solar systems and other renewable sources."
            image={RenewableEnergy}
            alt="Renewable energy"
          />
          <ServiceCard
            title="Energy efficiency"
            description="Energy efficiency evaluations and improvements."
            image={EnergyEfficiency}
            alt="Energy efficiency"
          />
        </div>
      </section>
      
      <section className="values-section">
        <Titleh2 text="Values" />
        <div className="values-container">
          <Values
            Title="Innovation"
            Parrafo="We embrace new technologies and practices to provide efficient and advanced solutions."
            Image={Innovation}
          />
          <Values
            Title="Sustainability"
            Parrafo="Committed to the environment, we aim to reduce the ecological impact of our projects"
            Image={Sustainability}
          />
          <Values
            Title="Quality"
            Parrafo="We ensure excellence in every project, guaranteeing total customer satisfaction."
            Image={Quality}
          />
          <Values
            Title="Integrity"
            Parrafo="We operate with honesty and transparency in all our business relationships."
            Image={Integrity}
          />
          <Values
            Title="Collaboration"
            Parrafo="We work together with clients, partners, and communities to achieve common goals."
            Image={Collaboration}
          />
        </div>
      </section>
    </div>
  );
};

export default Service;