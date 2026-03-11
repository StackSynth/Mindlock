import React from 'react';
import './landingpage.css';
import { Search, Bell, User } from "lucide-react";
import { motion } from 'framer-motion';

function LandingPage({ onSignInClick, onNavigate }) {
  return (
    <>
      {/* Neural Network Background */}
      <div className="neural-background">
        <div className="network-container">
          {/* Network Nodes */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="network-node"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}

          {/* Connection Lines */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="connection-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 150}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="network-particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight
                ],
                opacity: [0, 0.8, 0.8, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

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
            <button className="nav-link" onClick={() => onNavigate('home')}>Home</button>
            <button className="nav-link" onClick={() => onNavigate('feature')}>Features</button>
            <button className="nav-link" onClick={() => onNavigate('about')}>About</button>
            <button className="nav-link" onClick={() => onNavigate('contact')}>Contact</button>
          </motion.div>

          <motion.div
            className="navbar-actions"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="btn-login" onClick={() => onNavigate('signup')}>Log in</button>
            <button className="btn-signup" onClick={() => onNavigate('signup')}>Sign up</button>
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
            MindLockAI is a secure AI-powered personal data vault that lets users store sensitive information safely. It uses client-side encryption with the Web Crypto API, ensuring data is encrypted before being stored. This gives users full control over their privacy and personal data.
          </p>
          <div className="get-started-container">
            <button className="get-started-btn" onClick={() => onNavigate('signup')}>Get Started</button>
          </div>
        </motion.div>
      </div>

      <div className="section2">
        {/* Neural Network Background for Section 2 */}
        <div className="neural-background">
          <div className="network-container">
            {/* Network Nodes */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`node-sec2-${i}`}
                className="network-node"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
              />
            ))}

            {/* Connection Lines */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`line-sec2-${i}`}
                className="connection-line"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 150}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-sec2-${i}`}
                className="network-particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight
                  ],
                  opacity: [0, 0.8, 0.8, 0]
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section3">
        {/* Neural Network Background for Section 3 */}
        <div className="neural-background">
          <div className="network-container">
            {/* Network Nodes */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`node-sec3-${i}`}
                className="network-node"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
              />
            ))}

            {/* Connection Lines */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`line-sec3-${i}`}
                className="connection-line"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 150}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          {/* Floating Particles */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-sec3-${i}`}
                className="network-particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight
                  ],
                  opacity: [0, 0.8, 0.8, 0]
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage