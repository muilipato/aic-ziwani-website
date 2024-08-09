import React from 'react';
import './Hero.css';

const Hero = ({title, subtitle}) => (
  <section className="hero" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
    <div className="hero-text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </section>
);

export default Hero;