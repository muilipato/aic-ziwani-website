import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Church Name</div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to="/youth">Youth</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/leadership">Leadership</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
