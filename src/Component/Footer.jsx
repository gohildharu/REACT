import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h2 className="footer-logo">BEST DEAL <span>Travels</span></h2>
          <p>
            Your trusted partner for unforgettable journeys.
            Explore destinations, experiences, and memories —
            perfectly planned for you.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Destination</li>
            <li>Activities</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>📍 E-105 AAGAM VIVIANNA, Opp Florence Building, Vesu, Surat, Gujarat 395007</p>
          <p>📞 +91 90999 93100</p>
          <p>✉️ bestdealtravels@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Best Deal Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
