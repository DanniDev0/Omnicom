import React from 'react';
import '../assets/style/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Facebook from '../assets/img/Facebook.png';
import Instagram from '../assets/img/Instagram.png';
import X from '../assets/img/X.png';
import Location from '../assets/img/Location.png';
import Email from '../assets/img/Email.png';
import Phone from '../assets/img/Phone.png';
import NMSDC from '../assets/img/Certificate_NMSDC.png';
import SWaM from '../assets/img/Certificate_SWaM.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-items-wrapper">
            <div className="footer-item">
              <i className="icon"><img src={Location} alt="Location" /></i>
              <p>
                <a
                  href="https://www.google.com/maps?q=PO BOX 2734, WOODBRIDGE, VA, 22195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  PO BOX 2734, WOODBRIDGE, VA, 22195
                </a>
              </p>
            </div>
            <div className="footer-item">
              <i className="icon"><img src={Phone} alt="Phone" /></i>
              <p><a href="tel:+15712788712" className="contact-link">+1 5712788712</a></p>
            </div>
            <div className="footer-item">
              <i className="icon"><img src={Email} alt="Email" /></i>
              <p><a href="mailto:info@omnicomcr.com" className="contact-link">info@omnicomcr.com</a></p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/omnicomcr" className="social-icon-link facebook-neon" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/omnicom_cr" className="social-icon-link instagram-neon" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://x.com" className="social-icon-link x-neon" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="X" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Certificates</h3>
          <div className="certifications-images">
            <img src={NMSDC} alt="NMSDC Certificate" className="certification-img neon-border" />
            <img src={SWaM} alt="SWaM Certificate" className="certification-img neon-border" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© OMNICOM CR ENTERPRISES, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};