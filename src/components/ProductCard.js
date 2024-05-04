import React from 'react';
import '../styles/ProductCard.css'; // Importing CSS

const ProductCard = ({ name, price, imageUrl }) => {
    return (
        <div className="productCard">
            <img src={imageUrl} alt={name} className="productImage" />
            <div className="productCardContent">
                <h3>{name}</h3>
                <p>${price.toFixed(2)}</p>
                <button className="addToCartButton">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
