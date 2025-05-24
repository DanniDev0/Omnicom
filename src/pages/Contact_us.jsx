import React from "react";
import Title from "../components/Title";
import "../assets/style/Contact_us.css";
import MapComponent from "../components/MapComponent";
import ContactFormComponent from "../components/ContactFormComponent";

export const Contact_us = () => {
  return (
    <section className="animate-container">
      <Title text="CONTACT US" />
      <div className="container">
        <MapComponent />
        <ContactFormComponent />
      </div>
    </section>
  );
};

export default Contact_us;
