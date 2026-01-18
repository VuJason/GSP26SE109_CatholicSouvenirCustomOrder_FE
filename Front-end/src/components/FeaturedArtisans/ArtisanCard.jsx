import React from 'react';
import './ArtisanCard.css';

const ArtisanCard = ({ name, location, description, profileImage, productImage }) => {
    return (
        <div className="artisan-card">
            <div className="artisan-header">
                <img src={profileImage} alt={name} className="artisan-avatar" />
                <div className="artisan-info">
                    <h3 className="artisan-name">{name}</h3>
                    <p className="artisan-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        {location}
                    </p>
                </div>
            </div>

            <p className="artisan-description">{description}</p>

            <div className="artisan-product-image">
                <img src={productImage} alt={`${name}'s work`} />
            </div>

            <button className="btn btn-secondary artisan-cta">View Shop</button>
        </div>
    );
};

export default ArtisanCard;
