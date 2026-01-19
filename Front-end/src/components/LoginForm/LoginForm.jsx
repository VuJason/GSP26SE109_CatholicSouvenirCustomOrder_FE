import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await authService.login(email, password);

            if (result.success) {
                login(result.user, rememberMe);
                navigate('/');
            } else {
                setError(result.error || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form-header">
                <h1 className="login-title">Welcome Back</h1>
                <p className="login-subtitle">Sign in to your Sanctus account</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
                {error && (
                    <div className="error-message">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {error}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                </div>

                <div className="form-options">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>Remember me</span>
                    </label>
                    <a href="#forgot" className="forgot-link">Forgot password?</a>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary login-btn"
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>

                <div className="login-footer">
                    <p>Don't have an account? <a href="#register" className="register-link">Create one</a></p>
                </div>

                <div className="test-credentials">
                    <p className="test-title">Test Accounts:</p>
                    <div className="test-accounts">
                        <div className="test-account">
                            <strong>Customer:</strong> customer@sanctus.com / customer123
                        </div>
                        <div className="test-account">
                            <strong>Artisan:</strong> artisan@sanctus.com / artisan123
                        </div>
                        <div className="test-account">
                            <strong>Admin:</strong> admin@sanctus.com / admin123
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
