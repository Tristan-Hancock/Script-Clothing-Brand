import React from 'react';
import { Link } from 'react-router-dom';
import collections from '../data/collections';
import ClothingCard from './ClothingCard';
import '../styles/clothingitems.css';

const ClothingItems = () => {
    return (
        <div className="clothing-items-container">
            <h1 className="clothing-title">Spring '24</h1>
            <div className="clothing-cards">
                {collections.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id} className="clothing-card-link">
                        <ClothingCard 
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ClothingItems;
