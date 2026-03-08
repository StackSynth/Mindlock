import React from 'react';
import './landingpage.css';
import { Search, Bell, User } from "lucide-react";

function LandingPage() {
  return (
    <>
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

      <div className="section1">
        <div className="heading">
          <h1>
            Encripted
          </h1>
        </div>
        <div className="description">
          <p>
            MindLockAI is a secure AI-powered personal data vault that helps users store sensitive information safely.
            It uses client-side encryption with the Web Crypto API, ensuring that data is encrypted before being stored
            in the database. The platform combines strong security, AI assistance, and modern cloud storage to protect
            private notes, ideas, and files. With MindLockAI, users maintain full control over their data and privacy.
          </p>
        </div>
      </div>

      <div className="section2">
      </div>
    </>
  )
}

export default LandingPage