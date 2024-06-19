// components/ClothingItems.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import collections from '../data/collections';
import ClothingCard from './ClothingCard';
import '../styles/clothingitems.css';
import { CartContext } from '../context/CartContext';

const ClothingItems = ({ searchTerm }) => {
  const { addToCart } = useContext(CartContext);

  const filteredItems = collections.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="clothing-items-container">
      <h1 className="clothing-title">Spring '24</h1>
      <div className="clothing-cards">
        {filteredItems.map(item => (
          <Link to={`/product/${item.id}`} key={item.id} className="clothing-card-link">
            <ClothingCard 
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToCart={() => addToCart(item)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClothingItems;
