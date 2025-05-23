import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../components/Title";
import Button from "../components/Button";
import Project1 from "../assets/img/Project1.jpg";
import Project2 from "../assets/img/Project2.jpg";
import Project3 from "../assets/img/Project3.jpg";
import Project4 from "../assets/img/Project4.jpg";
import Project5 from "../assets/img/Project5.jpg";
import Project6 from "../assets/img/Project6.jpg";
import "../assets/style/ProjectsRedesign.css";
import { Link } from "react-router-dom";


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
    setZoomed(false);
  };

  const projects = [
    {
      img: Project1,
      desc: "Installation and upgrades of electrical panels for safe and efficient energy distribution.",
    },
    {
      img: Project2,
      desc: "Ceiling fan installations that improve airflow, lighting, and energy efficiency.",
    },
    {
      img: Project3,
      desc: "Bathroom exhaust fan installations that improve air circulation and prevent humidity.",
    },
    {
      img: Project4,
      desc: "Exterior electrical service upgrades for greater safety and code compliance.",
    },
    {
      img: Project5,
      desc: "Precise installation of the home's main electrical service using quality materials.",
    },
    {
      img: Project6,
      desc: "Modern lighting fixture installations to transform spaces with style and safety.",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <Title
          text="Our Projects"
          subtitle="Visible quality. Assured confidence."
        />
        <p className="projects-intro">
          Discover how we transform spaces with safe, modern, and high-quality electrical installations.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(project.img)}
            >
              <img src={project.img} alt={`Project ${index + 1}`} />
              <div className="project-card-content">
                <p>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/Contact_us">
            <Button text="Request a Quote" />
          </Link>
        </motion.div>

        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="lightbox"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={lightboxImage}
                alt="Project"
                className="lightbox-image"
                onClick={toggleZoom}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomed ? 1.8 : 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
