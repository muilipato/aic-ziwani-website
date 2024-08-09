import React from 'react';
import Hero from '../components/Hero';
import './About.css'
const About = () => (
  <div className="about-page">
    <Hero title="Our Mission and Vision" subtitle="Beliefs"/>
    <section className="history">
      <h2>Brief Church History</h2>
      <p>Our church was founded in ...</p>
    </section>
    <section className="pastoral-team">
      <h2>Pastoral Team</h2>
      <div className="team-cards">
        <div className="team-card">
          <img src="path-to-image.jpg" alt="Pastor Name" />
          <p>Pastor Name</p>
        </div>
        {/* Add more team cards as needed */}
      </div>
    </section>
  </div>
);

export default About;
