import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Adjust the relative path as needed
import logo from '../assets/images/logo.png'; // Adjust the relative path as needed
import instagramIcon from '../assets/instagram-icon.png'; // Adjust the relative path as needed
import linkedinIcon from '../assets/linkedin-icon.png'; // Adjust the relative path as needed


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Rhyno EV" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li className="dropdown">
          <li><Link to="/products">Products</Link></li>
            <ul className="dropdown-content">
              <li><Link to="/products/se03-lite">SE03 Lite</Link></li>
              <li><Link to="/products/se03">SE03</Link></li>
              <li><Link to="/products/se03-max">SE03 Max</Link></li>
              <li><Link to="/compare">Compare All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/pre-book">Pre-book Now</Link></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
