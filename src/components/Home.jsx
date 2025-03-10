import React from 'react';
import '../css/Home.css';
import stockImage from '../images/stock1.jpg'; // Import the image

function Home() {
  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section className="hero" style={{ backgroundImage: `url(${stockImage})` }}>
        <div className="hero-overlay">
          <h1>Melanie Mullins</h1>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="featured">
        <h2>Featured Properties</h2>
        <div className="listings-grid">
          <div className="property-card">
            <div className="property-image"></div>
            <h3>Cozy Cottage</h3>
            <p>$250,000</p>
          </div>
          <div className="property-card">
            <div className="property-image"></div>
            <h3>Modern Condo</h3>
            <p>$350,000</p>
          </div>
          <div className="property-card">
            <div className="property-image"></div>
            <h3>Family Home</h3>
            <p>$450,000</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;