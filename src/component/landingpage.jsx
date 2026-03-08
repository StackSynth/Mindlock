import React from 'react';
import './landingpage.css';
import { Search, Bell, User } from "lucide-react";
import { motion } from 'framer-motion';

function LandingPage({ onSignInClick }) {
  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar-container">
          <motion.div
            className="navbar-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1>MindLock AI</h1>
          </motion.div>

          <motion.div
            className="navbar-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.div>

          <motion.div
            className="navbar-actions"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="btn-login" onClick={onSignInClick}>Log in</button>
            <button className="btn-signup">Sign up</button>
          </motion.div>
        </div>
      </motion.nav>

      <div className="section1">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          >
            Encripted
          </motion.h1>
        </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p>
            MindLockAI is a secure AI-powered personal data vault that helps users store sensitive information safely.
            It uses client-side encryption with the Web Crypto API, ensuring that data is encrypted before being stored
            in the database. The platform combines strong security, AI assistance, and modern cloud storage to protect
            private notes, ideas, and files. With MindLockAI, users maintain full control over their data and privacy.
          </p>
        </motion.div>
      </div>

      <div className="section2">
      </div>
    </>
  )
}

export default LandingPage