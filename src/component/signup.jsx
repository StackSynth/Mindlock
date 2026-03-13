import React, { useState } from 'react';
import './signup.css';
import { supabase } from './supabaseclint';
import { motion } from 'framer-motion';

function Signup({ onNavigate }) {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            if (isSignIn) {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;
                setMessage('Sign in successful! Redirecting...');
                setTimeout(() => onNavigate('home'), 1500);
            } else {
                if (password !== confirmPassword) {
                    setError('Passwords do not match');
                    setLoading(false);
                    return;
                }

                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                });

                if (error) throw error;
                setMessage('Account created successfully! Please check your email to verify.');
                setTimeout(() => setIsSignIn(true), 2000);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        setIsSignIn(!isSignIn);
        setError('');
        setMessage('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

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
                        className="navbar-actions"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button className="btn-login" onClick={() => onNavigate('landing')}>Back</button>
                    </motion.div>
                </div>
            </motion.nav>
            <div className="auth-content">
                <motion.div
                    className="auth-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <h1 className="auth-title">
                        {isSignIn ? 'Sign In to MindLock AI' : 'Create Account'}
                    </h1>
                    <p className="auth-description">
                        {isSignIn
                            ? 'Welcome back! Please sign in to your account.'
                            : 'Join us! Create your account to get started.'
                        }
                    </p>

                    <form className="auth-form" onSubmit={handleAuth}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>

                        {!isSignIn && (
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    placeholder="Confirm your password"
                                />
                            </div>
                        )}

                        {error && <div className="error-message">{error}</div>}
                        {message && <div className="success-message">{message}</div>}

                        <button
                            type="submit"
                            className="auth-btn"
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : (isSignIn ? 'Sign In' : 'Sign Up')}
                        </button>
                    </form>

                    <div className="auth-toggle">
                        <p>
                            {isSignIn ? "Don't have an account? " : "Already have an account? "}
                            <button
                                type="button"
                                className="toggle-btn"
                                onClick={toggleMode}
                            >
                                {isSignIn ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Signup;