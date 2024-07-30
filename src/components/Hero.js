import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
    <div className="hero-text">
      <h1>Welcome to Our Service</h1>
      <p>Join us and feel the presence of God.</p>
    </div>
  </section>
);

export default Hero;
