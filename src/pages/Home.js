import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Sermons from '../components/Sermons';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <Hero/>
    <Services />
    <Sermons />
    <Footer />
  </div>
);

export default Home;
