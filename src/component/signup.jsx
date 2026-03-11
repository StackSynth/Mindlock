import React, { useState } from 'react';
import './signup.css';
import { supabase } from './supabaseclint';
import { motion } from 'framer-motion';

function Signup({ onNavigate }) {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
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
                // Sign in logic
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;
                setMessage('Sign in successful! Redirecting...');
                setTimeout(() => onNavigate('home'), 1500);
            } else {
                // Sign up logic
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

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('');
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
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
        <div className="auth-wrapper">
            <motion.div
                className="auth-form-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Logo */}
                <motion.div
                    className="auth-logo"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1>MindLock AI</h1>
                </motion.div>

                {/* Welcome Text */}
                <motion.div
                    className="welcome-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2>{isSignIn ? 'Welcome back' : 'Create account'}</h2>
                    <p>{isSignIn ? 'Sign in to access your secure vault' : 'Join us to protect your data'}</p>
                </motion.div>

                {/* Form */}
                <motion.form
                    className="auth-form"
                    onSubmit={handleAuth}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
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

                    {isSignIn && (
                        <div className="form-options">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                            <button type="button" className="forgot-password">
                                Forgot password?
                            </button>
                        </div>
                    )}

                    {error && <div className="error-message">{error}</div>}
                    {message && <div className="success-message">{message}</div>}

                    <button
                        type="submit"
                        className="auth-btn primary"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : (isSignIn ? 'Sign in' : 'Sign up')}
                    </button>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <button
                        type="button"
                        className="auth-btn google"
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                    >
                        Sign in with Google
                    </button>
                </motion.form>

                {/* Toggle */}
                <motion.div
                    className="auth-toggle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p>
                        {isSignIn ? "Don't have an account yet? " : "Already have an account? "}
                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={toggleMode}
                        >
                            {isSignIn ? 'Register' : 'Sign in'}
                        </button>
                    </p>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="copyright"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <p>&copy; 2024 MindLock AI. All rights reserved.</p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Signup;