import React from 'react';
import '../assets/style/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Linkedin from '../assets/img/Linkedin.png';
import Facebook from '../assets/img/Facebook.png';
import Instagram from '../assets/img/Instagram.png';
import X from '../assets/img/X.png';
import Location from '../assets/img/Location.png';
import Email from '../assets/img/Email.png';
import Phone from '../assets/img/Phone.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <div className="footer-item">
            <i className="icon"><img src={Location} alt="Location" /></i>
            <p>
              <a 
                href="https://www.google.com/maps?q=PO BOX 2734, WOODBRIDGE, VA, 22195" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="location-link"
              >
                <strong>PO BOX 2734, WOODBRIDGE, VA, 22195</strong>
              </a>
            </p>
          </div>
          <div className="footer-item">
            <i className="icon"><img src={Phone} alt="Phone" /></i>
            <p><strong><a href="tel:+15712788712">+1 5712788712</a></strong></p>
          </div>
          <div className="footer-item">
            <i className="icon"><img src={Email} alt="Email" /></i>
            <p><strong><a href="mailto:info@omnicomcr.com">info@omnicomcr.com</a></strong></p>
          </div>
          <div>
            <p>© OMNICOM CR ENTERPRISES, LLC. All rights reserved.</p>
          </div>
        </div>

        <div className="footer-about">
          <h3>About the company</h3>
          <p>Proudly SWaM certified, we deliver reliable, efficient, and sustainable solutions.
          📞 Contact us today to learn how we can help you!.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/omnicomcr" className="social-link facebook" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/omnicom_cr" className="social-link instagram" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://X.com" className="social-link x" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="X" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};