import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CategorySection from '../components/CategorySection/CategorySection';
import FeaturedArtisans from '../components/FeaturedArtisans/FeaturedArtisans';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <main>
                <Hero />
                <CategorySection />
                <FeaturedArtisans />
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
