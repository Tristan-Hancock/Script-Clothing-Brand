import React from 'react';
import '../styles/clothingcard.css';

const ClothingCard = ({ name, price, imageUrl }) => {
    return (
        <div className="clothing-card">
            <img src={imageUrl} alt={name} className="clothing-image" />
            <div className="clothing-info">
                <h3 className="clothing-name">{name}</h3>
                <p className="clothing-price">{price}</p>
            </div>
        </div>
    );
};

export default ClothingCard;

