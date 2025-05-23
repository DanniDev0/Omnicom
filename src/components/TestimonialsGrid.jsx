import React from 'react';
import styles from '../assets/style/TestimonialsGrid.module.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Jane Doe', rating: 5, message: '“They were professional, on time, and left everything working perfectly.”' },
  { name: 'Carlos Rivera', rating: 4, message: '“Quick and clean installation. Very satisfied with the results.”' },
  { name: 'Emily Zhang', rating: 5, message: '“Excellent work and polite service. Highly recommend!”' },
  { name: 'Mohamed Ali', rating: 5, message: '“Very efficient and great communication throughout.”' },
  { name: 'Linda Thompson', rating: 5, message: '“Amazing customer service. They fixed our issue faster than expected.”' },
  { name: 'Raj Patel', rating: 4, message: '“Professional and affordable. Great value for the service.”' },
  { name: 'Sara Williams', rating: 5, message: '“Their team went above and beyond. Everything was perfect.”' },
  { name: 'Anthony Kim', rating: 4, message: '“Great service and punctual. Would recommend to friends and family.”' }
];

const TestimonialsGrid = () => {
  return (
    <section className={styles.testimonials}>
      <h2>Client Testimonials</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.name}>{testimonial.name}</p>
            <div className={styles.stars}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} color="#facc15" />
              ))}
            </div>
            <p className={styles.message}>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsGrid;