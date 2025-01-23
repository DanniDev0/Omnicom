import React from 'react'
import '../assets/style/Projects.css'
import Title from '../components/Title'
import { CardProjects } from '../components/CardProjects'
import Project1 from '../assets/img/Project1.jpg'
import Project2 from '../assets/img/Project2.jpg'
import Project3 from '../assets/img/Project3.jpg'
import Project4 from '../assets/img/Project4.jpg'
import Project5 from '../assets/img/Project5.jpg'
import Project6 from '../assets/img/Project6.jpg'
import Project7 from '../assets/img/Project7.jpg'
import Project8 from '../assets/img/Project8.jpg'
import Project9 from '../assets/img/Project9.jpg'
import Project10 from '../assets/img/Project10.jpg'

export const Projects = () => {
    return (
        <div>
            <section className="animate-container">
                <Title text="PROJECTS" />
                <div className="project-grid">
                    <CardProjects
                        Image={Project1}
                        Title="Electrical Installation"
                        Description="'We perform complete electrical installations for residential and commercial buildings, ensuring safe and efficient operation'"
                    />
                    <CardProjects
                        Image={Project2}
                        Title="Electrical Maintenance"
                        Description="'We offer preventive and corrective maintenance services for electrical systems, guaranteeing their optimal performance and durability.'"
                    />
                    <CardProjects
                        Image={Project3}
                        Title="Solar Panels"
                        Description="'We install solar energy systems to help reduce electricity costs and promote the use of renewable energy.'"
                    />
                    <CardProjects
                        Image={Project4}
                        Title="Heating Systems"
                        Description="'Installation and maintenance of heating systems to ensure a comfortable and warm environment during the cold months.'"
                    />
                    <CardProjects
                        Image={Project5}
                        Title="Electrical Networks"
                        Description="'We design and construct electrical networks for buildings and complexes, ensuring an efficient and safe distribution of energy.'"
                    />
                    <CardProjects
                        Image={Project6}
                        Title="Panel Maintenance"
                        Description="'Cleaning and maintenance services for solar panels, optimizing their performance and extending their useful life.'"
                    />
                    <CardProjects
                        Image={Project7}
                        Title="Air Conditioning"
                        Description="'Installation and maintenance of air conditioning systems to ensure a cool and comfortable environment all year round.'"
                    />
                    <CardProjects
                        Image={Project8}
                        Title="Wind Energy"
                        Description="'We implement wind energy systems to harness wind as a sustainable source of renewable energy.'"
                    />
                    <CardProjects
                        Image={Project9}
                        Title="Energy Efficiency"
                        Description="'We evaluate and improve the energy efficiency of buildings and systems to reduce energy consumption and costs.'"
                    />
                    <CardProjects
                        Image={Project10}
                        Title="Clean Energy"
                        Description="'We develop clean energy solutions to promote a sustainable future and reduce environmental impact.'"
                    />
                </div>
            </section>
            
        </div>
    )
}
