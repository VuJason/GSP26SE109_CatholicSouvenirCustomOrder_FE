import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Sacred Artistry for Your<br />Spiritual Journey
                    </h1>
                    <p className="hero-description">
                        Connect with faithful artisans creating custom rosaries, statues,<br />
                        and keepsakes imbued with prayer.
                    </p>
                    <button className="btn btn-primary hero-cta">
                        Explore the Marketplace
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
