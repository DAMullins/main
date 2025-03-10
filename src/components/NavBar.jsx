import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import logo1 from '../images/TurnKeyRealty.png'; // Adjust path as needed

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logos">
        <a href="https://www.turnkeyrealtyharrogate.com/" target="_blank" rel="noopener noreferrer">
          <img src={logo1} alt="Logo 1" className="logo1" />
        </a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/search" onClick={toggleMenu}>Search</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;