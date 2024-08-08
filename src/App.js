import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Sermons from './components/Sermons';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Hero/>
    <Services/>
    <Sermons/>
    <Footer/>
    </>

  );
}

export default App;
