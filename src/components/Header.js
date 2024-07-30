import React from 'react';
//import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Church Name</div>
    <nav>
      <ul>
      <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#sermons">Sermons</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
