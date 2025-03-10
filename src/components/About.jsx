import React from 'react';
import '../css/About.css'; // For styling
import portrait from "../images/IMG_9057.jpg"

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="portrait-container">
            <img src={portrait} alt="Real Estate Agent" className="portrait" />
        </div>
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;