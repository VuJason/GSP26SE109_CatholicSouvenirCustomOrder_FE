import React from 'react';
import ArtisanCard from './ArtisanCard';
import './FeaturedArtisans.css';

const FeaturedArtisans = () => {
    const artisans = [
        {
            id: 1,
            name: 'Marco V.',
            location: 'Bethlehem, Pennsylvania',
            description: 'A carpentry master who carves purely crafted wood items by hand.',
            profileImage: 'https://i.pravatar.cc/150?img=12',
            productImage: '/src/assets/wooden-bowl.png'
        },
        {
            id: 2,
            name: 'Elena S.',
            location: 'Santa Fe, New Mexico',
            description: 'Traditional woodcarver, forensically crafted with prayer and delicacy.',
            profileImage: 'https://i.pravatar.cc/150?img=47',
            productImage: '/src/assets/carved-wood.png'
        },
        {
            id: 3,
            name: 'Clara M.',
            location: 'Rome, Italy',
            description: 'Hand-weaves rosaries using age-old techniques and holy intent.',
            profileImage: 'https://i.pravatar.cc/150?img=32',
            productImage: '/src/assets/rosary-beads.png'
        }
    ];

    return (
        <section className="featured-artisans section">
            <div className="container">
                <div className="featured-artisans-header">
                    <div>
                        <h2 className="section-title">Featured Artisans</h2>
                        <p className="section-subtitle">Meet the hands and hearts behind the sacred crafts.</p>
                    </div>
                    <a href="#all-artisans" className="view-all-link">
                        View all artisans
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                <div className="artisans-grid">
                    {artisans.map(artisan => (
                        <ArtisanCard
                            key={artisan.id}
                            name={artisan.name}
                            location={artisan.location}
                            description={artisan.description}
                            profileImage={artisan.profileImage}
                            productImage={artisan.productImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArtisans;
