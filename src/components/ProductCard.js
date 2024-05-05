import React from 'react';
import '../styles/ProductCard.css'; // Importing CSS

const ProductCard = ({ name, description, price, imageUrl }) => {
    return (
        <div className="productCard">
            <img src={imageUrl} alt={name} className="productImage" />
            <div className="productCardContent">
                <h3>{name}</h3>
                <p className="productDescription">{description}</p>
                <div className="sizeAndPrice">
                    <select className="productSize">
                        <option value="">Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <p className="productPrice">${price.toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <button className="addToCartButton">Add to Cart</button>
                    <button className="buyNowButton">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
