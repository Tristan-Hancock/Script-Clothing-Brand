import React from 'react';
import collections from '../data/collections';
import ClothingCard from './ClothingCard';
import '../styles/clothingitems.css';

const ClothingItems = () => {
    return (
        <div className="clothing-items-container">
            <h1 className="clothing-title">Spring '24</h1>
            <div className="clothing-cards">
                {collections.map(item => (
                    <ClothingCard 
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClothingItems;
