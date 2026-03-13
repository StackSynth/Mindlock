import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';

function Contact({ onNavigate }) {
    return (
        <>
            <div className="neural-background">
                <div className="network-container">
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
                        <button className="btn-login" onClick={() => onNavigate('signup')}>Sign In</button>
                        <button className="btn-login" onClick={() => onNavigate('landing')}>Back</button>
                    </motion.div>
                </div>
            </motion.nav>

            <div className="contact-content">
                <motion.div
                    className="contact-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-description">
                        Get in touch with the MindLock AI team for support, partnerships, or inquiries.
                    </p>
                </motion.div>
                <button className="back-btn" onClick={() => onNavigate('landing')}>
                    Back to Landing
                </button>
            </div>
        </>
    )
}

export default Contact