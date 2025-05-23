import React from 'react';
import styles from '../assets/style/WhyChooseUs.module.css';
import { FaUserCheck, FaCheck, FaCommentDots } from 'react-icons/fa';

const reasons = [
  {
    title: 'Licensed Technicians',
    icon: <FaUserCheck />
  },
  {
    title: 'Fast and Clear Jobs',
    icon: <FaCheck />
  },
  {
    title: 'Bilingual Service',
    icon: <FaCommentDots />
  }
];

const WhyChooseUs = () => {
  return (
    <section className={styles.why}>
      <h2>Why Choose Us</h2>
      <div className={styles.grid}>
        {reasons.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.iconCircle}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
