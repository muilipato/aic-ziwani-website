import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Sermons from '../components/Sermons';
import Footer from '../components/Footer';
import homeBackgroundHeroImage from '../images/308585658_411706434441516_7217764519872752177_n.jpg'

const Home = () => (
  <div>
    <Header />
    <Hero title="Welcome to Our Service" subtitle="Join us and feel the presence of God." backgroundImage={homeBackgroundHeroImage}/>
    <Services />
    <Sermons />
    <Footer />
  </div>
);

export default Home;
