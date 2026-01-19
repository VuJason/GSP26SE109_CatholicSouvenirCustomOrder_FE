import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, artisan, price, salePrice, onSale }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                {onSale && <span className="badge badge-sale">SALE</span>}
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-artisan">By {artisan}</p>
                <div className="product-pricing">
                    {onSale ? (
                        <>
                            <span className="product-price product-price-sale">${salePrice}</span>
                            <span className="product-price product-price-original">${price}</span>
                        </>
                    ) : (
                        <span className="product-price">${price}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
