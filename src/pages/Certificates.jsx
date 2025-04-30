import React from "react";
import "../assets/style/Certificates.css";
import Title from "../components/Title";
import CardComponents from "../components/CardComponents";
import swam from "../assets/img/Certificate_swam.png";
import NMSDC from "../assets/img/Certificate_NMSDC.png";

export const Certificates = () => {
  return (
    <div className="certificates-page">
      <section className="certificates-header">
        <Title text="CERTIFICATES" />
      </section>
      <section className="certificates-content">
        <div className="certificates-description">
          <h2 className="certificates-title">
            Certifications that Support Our Commitment to Excellence.
          </h2>
          <p className="certificates-subtitle">
            At Omnicom CR Enterprises LLC, we are proud to hold key
            certifications that validate our readiness, excellence, and ability
            to compete in diverse and demanding markets.
          </p>
        </div>
        <div className="Certificates-seccion">
          <CardComponents
            Image={swam}
            Title="SWaM Certification"
            Text="We are officially certified by the Virginia Department of Small Business and Supplier Diversity as a Small, Minority-Owned, and Disadvantaged Business (SWaM). This certification grants us access to exclusive opportunities with public and private organizations committed to supplier diversity, reinforcing our role in building a more inclusive economy."
          />
          <CardComponents
            Image={NMSDC}
            Title="NMSDC Capital Readiness Program - Graduate"
            Text="We successfully completed the National Minority Supplier Development Council (NMSDC) Capital Readiness Program, which demonstrates our capacity to scale, access capital, and participate in national business development opportunities. This certification positions us as a growth-ready company and a strong partner within the U.S. minority business ecosystem."
          />
        </div>
      </section>
    </div>
  );
};

export default Certificates;
