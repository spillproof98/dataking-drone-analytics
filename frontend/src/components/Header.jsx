import React from 'react';
import logo from '../assets/logo.png';
import '../styles/theme.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="app-logo" />
        <h1 className="app-title">DK</h1>
      </div>
    </header>
  );
};

export default Header;
