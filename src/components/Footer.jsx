import React from "react";
import "../assets/style/Footer.css";
import Facebook from "../assets/img/Facebook.png";
import Instagram from "../assets/img/Instagram.png";
import X from "../assets/img/X.png";
import Location from "../assets/img/Location.png";
import Email from "../assets/img/Email.png";
import Phone from "../assets/img/Phone.png";
import NMSDC from "../assets/img/Certificate_NMSDC.png";
import SWaM from "../assets/img/Certificate_SWaM.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="footer-list">
            <li>
              <img src={Location} alt="Location" className="footer-icon" />
              <a
                href="https://www.google.com/maps?q=PO BOX 2734, WOODBRIDGE, VA, 22195"
                target="_blank"
                rel="noopener noreferrer"
              >
                PO BOX 2734, WOODBRIDGE, VA, 22195
              </a>
            </li>
            <li>
              <img src={Phone} alt="Phone" className="footer-icon" />
              <div>
                <a href="tel:+15713002744">+1 571-300-2744</a>
                <br />
                <a href="tel:+15712788712">+1 571-278-8712</a>
              </div>
            </li>

            <li>
              <img src={Email} alt="Email" className="footer-icon" />
              <a href="mailto:info@omnicomcr.com">info@omnicomcr.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/omnicomcr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/omnicom_cr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="X" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Certifications</h3>
          <div className="certifications">
            <a
              href="https://nmsdc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={NMSDC} alt="NMSDC Certificate" />
            </a>
            <a
              href="https://sbsd.virginia.gov/certification-division/swam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SWaM} alt="SWaM Certificate" />
            </a>
          </div>
          <p className="cert-description">
            • The <strong>NMSDC Capital Readiness Program Graduate</strong>{" "}
            highlights our readiness to access capital, grow strategically, and
            connect with corporate and government opportunities.
            <br />• The <strong>SWaM Certification</strong> officially
            recognizes us as a minority-owned small business, opening doors to
            exclusive procurement programs, state contracts, and networking
            opportunities in Virginia.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© OMNICOM CR ENTERPRISES, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};
