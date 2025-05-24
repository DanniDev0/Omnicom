import React from "react";
import styles from "../assets/style/CallToAction.module.css";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.cta}>
      <p className={styles.phone}>
        Call Us: <strong>(571) 300-2744</strong> or{" "}
        <strong>(571) 278-8712</strong>
      </p>
      <button className={styles.button} onClick={() => navigate("/contact_us")}>
        Get a Quote
      </button>
    </section>
  );
};

export default CallToAction;
