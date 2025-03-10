import React from 'react';
import '../css/Footer.css'; // For styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><b>Turn Key Realty</b></p>
            <p>395 Patterson Road, Harrogate, TN 37752</p>
          <p>Phone: (606) 634-7921</p>
          <p>Email: melanie@melanierealestate.com</p>
        </div>
        <div className="social-links">
          <h3>Follow Me</h3>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;