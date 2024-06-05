import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import collections from '../data/collections';
import '../styles/productdetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const product = collections.find(item => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="product-details-page">
            {product ? (
                <div className="product-details-container">
                    <div className="product-image-section">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-info-section">
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-price">₹{product.price}</p>
                        <p className="product-description">MRP - Inclusive of all taxes.</p>
                    
                        <div className="product-color-options">
                            <img src={product.imageUrl} alt="color option" className="color-option-image" />
                            {/* Add more color options here if needed */}
                        </div>
                        <div className="product-set">
                            <span>Set</span>
                            <div>Jacket + Dress</div>
                        </div>
                        <div className="product-size">
                            <span>Size</span>
                            <div className="product-size-options">
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                    <span
                                        key={size}
                                        className={`size-option ${selectedSize === size ? 'active' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="custom-sizing">📞 Get in touch for Custom Sizing</p>
                        <div className="product-actions">
                            <div className="product-quantity">
                                <button onClick={decreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <button className="add-to-cart-button">ADD TO CART</button>
                        </div>
                        <button className="buy-it-now-button">BUY IT NOW</button>
                        <div className="additional-info">
                            <p className="size-chart">Size Chart</p>
                            <p className="description">Description +</p>
                            <p className="product-details">Product Details & Care +</p>
                            <p className="shipping-returns">Shipping & Returns</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetails;
