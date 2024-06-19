// components/ProductSearchFilter/ProductSearchFilter.js
import React, { useState, useContext } from 'react';
import collections from '../../data/collections';
import ClothingCard from '../ClothingCard';
import styles from '../../styles/ProductSearchFilter.module.css';
import { CartContext } from '../ProductSearchFilter/CartContext';
import { Link } from 'react-router-dom';
const ProductSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  const filteredItems = collections.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.clothingItemsContainer}>
        <h1 className={styles.clothingTitle}>Spring '24</h1>
        <div className={styles.clothingCards}>
          {filteredItems.map(item => (
            <Link to={`/product/${item.id}`} key={item.id} className={styles.clothingCardLink}>
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
    </div>
  );
};

export default ProductSearchFilter;
