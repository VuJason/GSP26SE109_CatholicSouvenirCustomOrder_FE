import React from 'react';
import CategoryCard from './CategoryCard';
import './CategorySection.css';

const CategorySection = () => {
    const categories = [
        {
            id: 1,
            image: '/src/assets/statue.png',
            title: 'Statues',
            subtitle: 'HAND-PAINTED FIGURES'
        },
        {
            id: 2,
            image: '/src/assets/rosary.png',
            title: 'Rosaries',
            subtitle: 'CUSTOM & HEIRLOOM'
        },
        {
            id: 3,
            image: '/src/assets/cross.png',
            title: 'Crosses',
            subtitle: 'WALL & STANDING'
        },
        {
            id: 4,
            image: '/src/assets/textile.png',
            title: 'Textiles',
            subtitle: 'ALTAR & HOME'
        }
    ];

    return (
        <section className="category-section section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Browse by Category</h2>
                    <a href="#all-categories" className="view-all-link">
                        View all
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                <div className="category-grid">
                    {categories.map(category => (
                        <CategoryCard
                            key={category.id}
                            image={category.image}
                            title={category.title}
                            subtitle={category.subtitle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
