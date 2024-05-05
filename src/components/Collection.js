import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import summerCollection from '../data/summerCollection'; // Ensure you have this data
import winterCollection from '../data/winterCollection'; // Ensure you have this data
import '../styles/Collection.css'; // Assuming you might have specific styles for the collection layout

const Collection = () => {
    const [activeCollection, setActiveCollection] = useState('summer');
    const [collection, setCollection] = useState(summerCollection);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Set a timeout to change the collection after the animation completes
        const timer = setTimeout(() => {
            setCollection(activeCollection === 'summer' ? summerCollection : winterCollection);
            setAnimate(false);
        }, 500); // This should match the animation duration

        return () => clearTimeout(timer);
    }, [activeCollection]);

    const handleChangeCollection = (collectionName) => {
        setActiveCollection(collectionName);
        setAnimate(true);
    };
    return (
        <div className="collectionContainer">
            <div className="buttoncontainer">
            <button
                    onClick={() => handleChangeCollection('summer')}
                    className={`collectionButton ${activeCollection === 'summer' ? 'active' : ''}`}
                >
                    Summer Collection
                </button>
            <button
                onClick={() => setActiveCollection('winter')}
                className={`collectionButton ${activeCollection === 'winter' ? 'active' : ''}`}
            >
                Winter Collection
            </button>
            </div>
            <div className="productsGrid">
                {activeCollection === 'summer' ? summerCollection.map(item => (
                    <ProductCard key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                )) : winterCollection.map(item => (
                    <ProductCard key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    );
};
export default Collection;