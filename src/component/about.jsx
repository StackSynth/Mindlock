import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

function About({ onNavigate }) {
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
                        <button className="btn-login" onClick={() => onNavigate('landing')}>Back</button>
                    </motion.div>
                </div>
            </motion.nav>

            <div className="about-content">
                <motion.div
                    className="about-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <h1 className="about-title">About MindLock AI</h1>

                    <div className="about-section">
                        <h2 className="section-title">1. About MindLockAI</h2>
                        <p className="section-description">
                            MindLockAI is a secure AI-powered personal data vault designed to protect sensitive information. The platform allows users to store private notes, ideas, and important data in a safe digital environment. MindLockAI uses modern encryption technology to ensure that all user data remains protected and private.
                        </p>
                        <p className="section-description">
                            The system uses client-side encryption with the Web Crypto API, which means that user data is encrypted directly in the browser before it is stored in the database. This approach ensures that only the user can access and decrypt their stored information.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2 className="section-title">2. Our Mission</h2>
                        <p className="section-description">
                            The mission of MindLockAI is to create a secure and intelligent platform where users can safely store their personal data without worrying about privacy risks. In today's digital world, protecting personal information is extremely important, and MindLockAI aims to provide a simple and reliable solution for that problem.
                        </p>
                        <p className="section-description">
                            By combining modern encryption technology and AI-powered assistance, MindLockAI helps users manage and organize their information while maintaining full control over their privacy.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2 className="section-title">3. Why MindLockAI is Different</h2>
                        <p className="section-description">
                            MindLockAI focuses on security, privacy, and intelligent data management. The platform is designed to ensure that user information remains protected while still being easy to access and manage.
                        </p>
                        <div className="key-features">
                            <div className="feature-item">
                                <h3>Client-Side Encryption</h3>
                                <p>Data is encrypted in the user's browser before being stored.</p>
                            </div>
                            <div className="feature-item">
                                <h3>AI-Powered Assistance</h3>
                                <p>AI helps users organize and retrieve their stored information.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Privacy-First Design</h3>
                                <p>Users maintain full control over their encrypted data.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Secure Cloud Storage</h3>
                                <p>Encrypted data is stored safely using modern cloud infrastructure.</p>
                            </div>
                        </div>
                        <p className="section-description">
                            These features ensure that users can trust the platform to keep their sensitive information secure.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2 className="section-title">4. How MindLockAI Works</h2>
                        <p className="section-description">
                            MindLockAI follows a simple three-step process to ensure data security.
                        </p>
                        <div className="process-steps">
                            <div className="step-item">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Encrypt</h3>
                                    <p>User data is encrypted directly in the browser using the Web Crypto API before it is sent to the server.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Store</h3>
                                    <p>The encrypted data is then stored securely in the cloud database.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Access</h3>
                                    <p>When the user logs in, the encrypted data can be safely decrypted and accessed only by the user.</p>
                                </div>
                            </div>
                        </div>
                        <p className="section-description">
                            This process ensures that sensitive information is always protected.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2 className="section-title">5. Future Vision</h2>
                        <p className="section-description">
                            In the future, MindLockAI aims to expand its capabilities by introducing more advanced features. Planned improvements include enhanced AI tools, encrypted file storage, smart search functionality, and additional security layers.
                        </p>
                        <p className="section-description">
                            The goal is to continuously improve the platform and provide users with a smarter and safer way to store and manage their personal information.
                        </p>
                    </div>

                    <button className="back-btn" onClick={() => onNavigate('landing')}>
                        Back to Landing
                    </button>
                </motion.div>
            </div>
        </>
    )
}

export default About