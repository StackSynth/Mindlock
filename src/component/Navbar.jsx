import React from 'react';
import './landingpage.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>MindLock AI</h1>
        </div>
        
        <div className="navbar-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
