import React from 'react';
import styles from '../assets/style/TestimonialsGrid.module.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Johana R.', rating: 5, message: '“Walter is very responsible and helpful person, excellent service. He went above and beyond to help! I truly recommend him. He installed an EV charger for my new Tesla, really happy with his work. Anything you need for electrical, he is the MAN.”' },
  { name: 'Rachelle K.', rating: 5, message: '“Very professional and did such a great job switching out my light fixture. I would hire them again if needed, for sure! Phenomenal work and very quick and efficient! Thank you!!!.”' },
  { name: 'Jacob a.', rating: 5, message: '“Great work! Thank you guys, I will definitely reach out again when I have another project. Thank you.”' },
  { name: 'Edgar M.', rating: 5, message: '“There amazing work with that group, their very good people. I’ll recommend 100%.”' },
  { name: 'Arturo R.', rating: 5, message: '“They were professional and they arrive on time. They have good price and I definitely recommend them.”' },
  { name: 'Adela R.', rating: 5, message: '“Walter is a professional electrician, he did great job. I will hiring Omnicon, very happy with this company.”' },
  { name: 'Austin B.', rating: 5, message: '“Very quick to respond to my inquiry. I sent pictures and they gave me a quote quickly and we booked a time. They showed up early, did really great work at a great price. I would highly recommend them and will definitely use them again”' },
  { name: 'Hugo R.', rating: 4, message: '“Excellent service!”' }
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