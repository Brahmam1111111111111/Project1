import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Adjust the relative path as needed
import instagramIcon from '../assets/instagram-icon.png'; // Adjust the relative path as needed
import linkedinIcon from '../assets/linkedin-icon.png'; // Adjust the relative path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Policies</h4>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/refund-policy">Refund Policy</Link>
        <Link to="/website-policy">Website Policy</Link>
      </div>
      <div className="footer-section">
        <h4>Links</h4>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/rentals">Rentals</Link>
      </div>
      <div className="footer-section">
        <h4>Social</h4>
        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">Career (LinkedIn)</a>
        <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        
      </div>
      <div className="footer-bottom">
        <p>© 2024 Rhyno EV. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
