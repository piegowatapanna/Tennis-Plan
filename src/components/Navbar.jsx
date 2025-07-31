import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Tennis Plan" />
      </div>
      <ul className="navbar-menu">
        <li>Strona Główna</li>
        <li>Kalendarz</li>
        <li>Notes</li>
        <li>Statystyki</li>
      </ul>
    </nav>
  );
};

export default Navbar;
