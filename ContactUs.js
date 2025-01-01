import React from 'react';
import '../styles/ContactUs.css'; // Adjust the relative path as needed
import instagramIcon from '../assets/instagram-icon.png'; // Adjust the relative path as needed
import linkedinIcon from '../assets/linkedin-icon.png'; // Adjust the relative path as needed

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');

    if (name && email && message) {
      status.textContent = 'Thank you for your message!';
      status.style.color = 'green';
    } else {
      status.textContent = 'Please fill out all fields.';
      status.style.color = 'red';
    }
  };

  return (
    <div id="contact" className="container d-flex justify-content-center align-items-center vh-100">
      <div className="contact-us text-center">
        <h2>Contact Us</h2>
        <p><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
        <p><strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a></p>
        <p>
          <strong>Location:</strong> Rhyno Wheels Private Limited,<br />
          Near UG hostel gate #2, Behind PDEU, Raisan,<br />
          Gandhinagar, Gujarat, India.
        </p>
        <div className="social-icons">
          <a href="https://instagram.com/rhyno" target="_blank" aria-label="Instagram" className="nav-link" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/rhyno" target="_blank" aria-label="LinkedIn" className="nav-link" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p id="status" className="mt-3"></p>
      </div>
    </div>
  );
};

export default ContactUs;