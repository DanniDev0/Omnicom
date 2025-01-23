import React from 'react';
import '../assets/style/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import facebookLogo from '../assets/img/facebook.png';
import twitterLogo from '../assets/img/twitter.png';
import instagramLogo from '../assets/img/instagram.png';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-contact">
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" className="social-icon" aria-label="Facebook">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" className="social-icon" aria-label="Twitter">
              <img src={twitterLogo} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" className="social-icon" aria-label="Instagram">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>
          <div className="contact-info">
            <span className="email">
              <a href="mailto:info@omnicomcr.com">info@omnicomcr.com</a>
              <i className="fas fa-envelope"></i>
            </span>
            <span className="separator">|</span>
            <span className="phone">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:3016758465">+1 5712788712</a>
            </span>
          </div>
        </div>
        <p>&copy; OMNICOM CR ENTERPRISES, LLC. All rights reserved.</p>
      </div>
    </footer>

  );
};
