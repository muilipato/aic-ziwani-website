import React from 'react';
import './Hero.css';

const Hero = ({title, subtitle, backgroundImage}) => (
  <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="hero-text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </section>
);

export default Hero;