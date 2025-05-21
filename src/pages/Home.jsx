import React from "react";
import "../assets/style/Home.css";
import Button from "../components/Button";
import useTyped from "../assets/js/useTyped";
import Title from "../components/Title";
import Description from "../components/Description";
import { Link } from "react-router-dom";
import HomeImage from "../assets/img/Omnicom_Home.webp";

export const Home = () => {
  useTyped("#typed", {
    strings: [
      "Welcome to OMNICOM.",
      "Integral and Sustainable Energy Solutions.",
      "Successful projects in Colombia and Virginia.",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    smartBackspace: true,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
  });

  return (
    <section className="home-container">
      <Title text="OMNICOM" />
      <div className="typewriter">
        <span id="typed"></span>
      </div>

      <div className="home-image-wrapper">
        <img src={HomeImage} alt="Omnicom home" className="home-image" />
      </div>

      <Description text="Welcome to Omnicom, your trusted partner in electrical and HVAC services. We specialize in installations, maintenance, and sustainable solutions tailored to your needs. Contact us to bring your project to life with quality and professionalism." />
      <div className="btn-container">
        <Link to="/about_us">
          <Button text="Get to Know Us More" />
        </Link>
        <Link to="/contact_us">
          <Button text="Contact Us" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
