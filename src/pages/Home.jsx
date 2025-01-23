import React from 'react';
import '../assets/style/Home.css';
import Button from '../components/Button';
import useTyped from '../assets/js/useTyped';
import Title from '../components/Title';
import Description from '../components/Description';
import { Link } from 'react-router-dom';

export const Home = () => {
  useTyped('#typed', {
    strings: [
      'Welcome to OMNICOM.',
      'Integral and Sustainable Energy Solutions.',
      'Successful projects in Colombia and Virginia.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  });

  return (
    <section className="animate-container">
      <Title text="OMNICOM" />
      <div className="typewriter">
        <span id="typed"></span>
      </div>
      <Description text="Welcome to Omnicom CR Enterprises LLC! We are your trusted partner for electrical and HVAC solutions in Virginia. SWaM certified and committed to excellence. 📞 Contact us today for more information." />
      <div className='animated fadeInUp'>
        <Link to="/about_us">
          <Button text="Get to Know Us More" />
        </Link>
      </div>
    </section>
  );
};

export default Home;