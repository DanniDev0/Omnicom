import React from 'react';
import Title from '../components/Title';
import '../assets/style/Service.css';
import ServiceCard from '../components/ServiceCard';
import GeneralElectricity from '../assets/img/General-Electricity.png';
import HVAC from '../assets/img/HVAC.png';
import RenewableEnergy from '../assets/img/Renewable-Energy.png';
import EnergyEfficiency from '../assets/img/Energy-Efficiency.png';
import SmartEcoControl from '../components/SmartEcoControl';
import SmartEcoImage from '../assets/img/smart-ecocontrol.jpeg';
import Titleh2 from '../components/Titleh2';
import Values from '../components/Values';
import SmartCard from '../components/SmartCard';
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
      <section className="product-section">
        <Titleh2 text="Product" />
        <div className="product-container">
          <SmartEcoControl
            Image={SmartEcoImage}
            Name="SmartEcoControl"
            Description="Description of the innovative product that offers monitoring and control of electrical devices at very low cost"
          />
        </div>
        <div class="cards-wrapper">
          <SmartCard 
            Title="Automation of On/Off"
            Solutions1="Energy Savings:"
            Text1=" Prevents unnecessary use of devices"
            Solutions2="Unique Feature:"
            Text2=" Complete automation based on environmental conditions, not just manual control"
          />
          <SmartCard 
            Title="Real-Time Monitoring"
            Solutions1="Optimal Conditions:"
            Text1=" Immediate adjustments with real-time temperature and humidity data"
            Solutions2="Unique Feature:"
            Text2=" Continuous monitoring versus periodic data in other products"
          />
          <SmartCard 
            Title="Remote Control"
            Solutions1="Total Convenience:"
            Text1=" Control your devices from anywhere with a single app"
            Solutions2="Unique Feature:"
            Text2=" Integration of multiple devices into a single platform."
          />
          <SmartCard 
            Title="Alerts and Notifications"
            Solutions1="Quick Reaction:"
            Text1=" Receive immediate alerts for abnormal conditions, such as high temperatures"
            Solutions2="Unique Feature:"
            Text2=" Proactive notifications based on specific conditions"
          />
          <SmartCard 
            Title="Lighting Optimization"
            Solutions1="Energy Efficiency:"
            Text1=" Automatic light adjustment based on occupancy and time of day"
            Solutions2="Unique Feature:"
            Text2=" Advanced automation compared to manual control in other products"
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