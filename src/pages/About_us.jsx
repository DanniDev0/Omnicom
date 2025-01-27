import React from 'react'
import Title from '../components/Title'
import Description from '../components/Description';
import CardTeam from '../components/CardTeam';
import ImageHover from '../components/ImageHover';
import Freddy from '../assets/img/Freddy.jpg'
import Jose from '../assets/img/Jose.jpg'
import Titleh2 from '../components/Titleh2'
import MisionImg from '../assets/img/Mision.jpg';
import VisionImg from '../assets/img/Vision.jpg';
import '../assets/style/About_us.css'



export const About_us = () => {
    return (
        <div>
            <section className="animate-container">
                <Title text="ABOUT US" />
                <Description text="Omnicom CR Enterprises (OCRE) is an innovative company specializing in providing comprehensive solutions in construction, energy efficiency, renewable energy, general electricity, air conditioning, plumbing and sanitation, cleaning, maintenance and gardening, and specialized personnel supply. Founded by experts with over 15 years of experience in both Colombia and the United States, Omnicom combines local and international knowledge to deliver high-quality services and customized solutions to its clients." />
            </section>
            <section className="objetivos">
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
                    Text="MISSION
                    Our mission is to empower communities and businesses through innovative and sustainable solutions, improving quality of life and promoting a greener environment."
                />
            </section>
            <section>
                <Titleh2 text="MEET OUR TEAM" />
                <div className="card-container">
                    <CardTeam
                        image={Freddy} 
                        name="Fredy Castillo"
                        description="Fredy Castillo is an experienced electrical engineer with over 15 years in design, construction, and maintenance of electrical networks, specializing in medium and low voltage systems. He has also been involved in photovoltaic solar energy projects and has a strong background in interdisciplinary collaboration."
                        jobPosition="Electrical Engineer"
                    />
                    <CardTeam
                        image={Jose} 
                        name="José Rodríguez"
                        description="José Rodríguez is a master electrician with more than 15 years of experience, proficient in installing, maintaining, and troubleshooting electrical systems, with expertise in HVAC systems and building controls. He holds multiple certifications, including Master Electrician and CFC Universal."
                        jobPosition="Master Electrician"
                    />
                </div>
            </section>

        </div>
    )
}

export default About_us;