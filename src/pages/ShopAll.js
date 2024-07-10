import React, { useState, useEffect } from 'react';
import collections from '../data/collections';
import AllCard from '../components/AllCard';
import Filter from '../components/Filter';
import styles from '../styles/ShopAll.module.css';

const ShopAll = () => {
  const [filteredItems, setFilteredItems] = useState(collections);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    let sortedItems = [...filteredItems];
    if (sortOption === 'asc') {
      sortedItems.sort((a, b) => parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', '')));
    } else if (sortOption === 'desc') {
      sortedItems.sort((a, b) => parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', '')));
    }
    setFilteredItems(sortedItems);
  }, [sortOption]);

  const handleFilterChange = (size) => {
    let filtered = collections;
    if (size !== '') {
      filtered = collections.filter(item => item.sizes.includes(size));
    }
    setFilteredItems(filtered);
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  return (
    <div className={styles.shopAllContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.filterSection}>
          <Filter 
            sizes={['XS', 'S', 'M', 'L', 'XL']} 
            onFilterChange={handleFilterChange} 
            onSortChange={handleSortChange}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.clothingGrid}>
          {filteredItems.map(item => (
            <AllCard 
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
