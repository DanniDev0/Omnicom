import React from 'react';
import Title from '../components/Title';
import Description from '../components/Description'
import ImageHover from '../components/ImageHover';
import MisionImg from '../assets/img/Mision.jpg';
import VisionImg from '../assets/img/Vision.jpg';
import '../assets/style/About_us.css';

export const About_us = () => {
    return (
        <div className="about-container">
            <section className="about-header">
                <Title text="ABOUT US" />
                <Description text="Omnicom CR Enterprises (OCRE) is an innovative company specializing in providing comprehensive solutions in construction, energy efficiency, renewable energy, general electricity, air conditioning, plumbing and sanitation, cleaning, maintenance and gardening, and specialized personnel supply. Founded by experts with over 15 years of experience in both Colombia and the United States, Omnicom combines local and international knowledge to deliver high-quality services and customized solutions to its clients." />
            </section>

            <section className="about-vision-mission">
                <ImageHover 
                    Image={VisionImg}
                    Name="Vision"
                    Title="VISION"
                    Text="We aspire to be leaders in the sector, recognized for our ability to deliver high-quality projects that integrate technology, sustainability, and social responsibility, expanding both nationally and internationally."
                />
                <ImageHover 
                    Image={MisionImg}
                    Name="Mision"
                    Title="MISSION"
                    Text="Our mission is to empower communities and businesses through innovative and sustainable solutions, improving quality of life and promoting a greener environment."
                />
            </section>
        </div>
    );
};

export default About_us;
