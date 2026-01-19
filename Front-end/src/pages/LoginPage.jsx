import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                {/* Left Side - Image */}
                <div className="login-image-section">
                    <div className="login-overlay"></div>
                    <div className="login-image-content">
                        <div className="login-logo">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Sanctus</span>
                        </div>
                        <div className="login-image-text">
                            <h2>Connect with Sacred Artisans</h2>
                            <p>Join our community of faithful craftspeople creating beautiful works imbued with prayer and devotion.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="login-form-section">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
