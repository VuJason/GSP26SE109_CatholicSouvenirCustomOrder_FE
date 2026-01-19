import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribe email:', email);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Sanctus Column */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Sanctus</span>
                        </div>
                        <p className="footer-description">
                            Connecting faith communities with sacred artisans and craftspeople. Every purchase supports small-scale Catholic artisans and their holy work.
                        </p>
                        <div className="footer-social">
                            <a href="#instagram" className="social-link" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#pinterest" className="social-link" aria-label="Pinterest">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 21C17 17 17 9 12 2 7 9 7 17 8 21z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#email" className="social-link" aria-label="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Marketplace Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Marketplace</h4>
                        <ul className="footer-links">
                            <li><a href="#shop">Shop All</a></li>
                            <li><a href="#artisans">Featured Artisans</a></li>
                            <li><a href="#new-arrivals">New Arrivals</a></li>
                            <li><a href="#gift-cards">Gift Cards</a></li>
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Community</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blog">Artisan Blog</a></li>
                            <li><a href="#become">Become an Artisan</a></li>
                            <li><a href="#help">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Column */}
                    <div className="footer-column footer-subscribe">
                        <h4 className="footer-title">Subscribe</h4>
                        <p className="subscribe-description">
                            Get our newsletter for weekly inspiration and sales on artisan products.
                        </p>
                        <form onSubmit={handleSubmit} className="subscribe-form">
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="subscribe-input"
                                required
                            />
                            <button type="submit" className="btn btn-primary subscribe-btn">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 Sanctus Marketplace. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="separator">·</span>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
