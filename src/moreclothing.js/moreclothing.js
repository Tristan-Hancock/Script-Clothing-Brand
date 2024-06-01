import React from 'react';
import collections from '../data/collections';
import styles from '../styles/moreclothing.css'; // Make sure the CSS path is correct

const MoreClothing = () => {
    return (
        <div className="shop-container">
            <div className="filter-sidebar">
                <div className="filter-section">
                    <h4>Sort by</h4>
                    <button>+</button>
                </div>
                <div className="filter-section">
                    <h4>Price</h4>
                    <input type="text" placeholder="₹0" />
                    <input type="text" placeholder="₹78500" />
                    <input type="range" min="0" max="78500" />
                </div>
                <div className="filter-section">
                    <h4>Product type</h4>
                    <ul>
                        <li><input type="checkbox" /> Co-ords (28)</li>
                        <li><input type="checkbox" /> Dress (1)</li>
                        <li><input type="checkbox" /> Dresses (18)</li>
                        <li><input type="checkbox" /> Ghaghra (2)</li>
                        <li><input type="checkbox" /> Jacket Sets (6)</li>
                        <li><input type="checkbox" /> Kurta Sets (6)</li>
                        <li><input type="checkbox" /> Pants & Skirts (10)</li>
                    </ul>
                </div>
                <div className="filter-section">
                    <h4>Color</h4>
                    <button>+</button>
                </div>
                <div className="filter-section">
                    <h4>Availability</h4>
                    <ul>
                        <li><input type="checkbox" /> In stock (71)</li>
                    </ul>
                </div>
            </div>
            <div className="product-list">
                {collections.map(item => (
                    <div key={item.id} className="product-item">
                        <img src={item.imageUrl} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreClothing;
