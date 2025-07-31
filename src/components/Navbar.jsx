import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="Logo Tennis Plan" />
      <ul>
        <li>Strona Główna</li>
        <li>Login</li>
        <li>Kalendarz</li>
        <li>Notes</li>
        <li>Statystyki</li>
      </ul>
    </div>
  );
};

export default Navbar;
