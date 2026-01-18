import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = () => {
    const products = [
        {
            id: 1,
            image: '/src/assets/silver-crucifix.png',
            title: 'Sterling Silver Crucifix',
            artisan: 'Maria\'s Relics',
            price: 89,
            salePrice: 69,
            onSale: true
        },
        {
            id: 2,
            image: '/src/assets/ceramic-bowl.png',
            title: 'Hand-Thrown Prayer Bowl',
            artisan: 'Patrick Clay',
            price: 52,
            onSale: false
        },
        {
            id: 3,
            image: '/src/assets/leather-journal.png',
            title: 'Refillable Leather Journal',
            artisan: 'Augustinian Leather',
            price: 128,
            salePrice: 99,
            onSale: true
        },
        {
            id: 4,
            image: '/src/assets/beeswax-candle.png',
            title: 'Pure Beeswax Altar Candle',
            artisan: 'Trappist Wicks',
            price: 34,
            onSale: false
        }
    ];

    return (
        <section className="product-grid-section section">
            <div className="container">
                <h2 className="section-title">Fresh from the Studio</h2>

                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            artisan={product.artisan}
                            price={product.price}
                            salePrice={product.salePrice}
                            onSale={product.onSale}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
