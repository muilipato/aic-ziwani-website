import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/aic_logo.png'; // Import the logo image

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={logo} alt="AIC Ziwani Logo" className="logo" />
      <h1 className="church-name">AIC Ziwani</h1>
    </div>
    <nav className="nav-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/youth">Youth</Link>
      <Link to="/events">Events</Link>
      <Link to="/leadership">Leadership</Link>
    </nav>
  </header>
);

export default Header;
