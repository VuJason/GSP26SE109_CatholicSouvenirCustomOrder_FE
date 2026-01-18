import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ image, title, subtitle }) => {
    return (
        <div className="category-card">
            <div className="category-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="category-card-content">
                <h3 className="category-card-title">{title}</h3>
                <p className="category-card-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
