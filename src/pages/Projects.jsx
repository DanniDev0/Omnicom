import React, { useState } from 'react';
import '../assets/style/Projects.css';
import Title from '../components/Title';
import Titleh2 from '../components/Titleh2';
import ButtonPrice from '../components/ButtonPrice';
import { CardProjects } from '../components/CardProjects';
import Project1 from '../assets/img/Project1.jpg';
import Project2 from '../assets/img/Project2.jpg';
import Project3 from '../assets/img/Project3.jpg';
import Project4 from '../assets/img/Project4.jpg';
import Project5 from '../assets/img/Project5.jpg';
import Project6 from '../assets/img/Project6.jpg';

export const Projects = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = (e) => {
        e.stopPropagation(); 
        setZoomed(!zoomed);
    };

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <section className="projects-section">
            <div className="projects-container">
                <Title text="PROJECTS" />
                <Titleh2 text="Electrical installation residential" />
                <div className="projects-grid">
                    <CardProjects Image={Project1} description="Power Up with Confidence Expert installation and upgrades of electrical panels for safe and efficient energy distribution. Professional. Compliant. Guaranteed." onClick={() => openLightbox(Project1)} />
                    <CardProjects Image={Project2} description="Comfort and Style, Installed Right Ceiling fan installations that enhance airflow, lighting, and energy efficiency — done with precision and care." onClick={() => openLightbox(Project2)} />
                    <CardProjects Image={Project3} description="Bright, Fresh, and Quiet Bathroom exhaust fan installations that improve air circulation and lighting — for a more comfortable and mold-free environment." onClick={() => openLightbox(Project3)} />
                    <CardProjects Image={Project4} description="Safe & Code-Compliant Electrical Service Upgrades We replace and upgrade your exterior electrical service for maximum safety, performance, and utility compliance." onClick={() => openLightbox(Project4)} />
                    <CardProjects Image={Project5} description="In Progress: Precision Electrical Service Installation Upgrading your home’s main service with care, code compliance, and quality materials — from start to finish." onClick={() => openLightbox(Project5)} />
                    <CardProjects Image={Project6} description="Elevate Your Space with Elegant Lighting We install modern, stylish light fixtures that transform your rooms into warm, inviting spaces — with precision and safety." onClick={() => openLightbox(Project6)} />
                </div>
                <ButtonPrice Text="Request your Quote" page="/Contact_us" />
                {lightboxImage && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <img 
                            src={lightboxImage} 
                            alt="Project" 
                            className={`lightbox-image ${zoomed ? 'zoomed' : ''}`}  
                            onClick={toggleZoom}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;