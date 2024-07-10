import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Filter.module.css';

const Filter = ({ sizes, onFilterChange, onSortChange }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
    onFilterChange(size);
  };

  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSelectedSort(sortOption);
    onSortChange(sortOption);
  };

  return (
    <div className={styles.filterContainer}>
      <h2><FontAwesomeIcon icon={faFilter} /> Filter by Size</h2>
      <select value={selectedSize} onChange={handleSizeChange} className={styles.sizeSelect}>
        <option value="">All Sizes</option>
        {sizes.map((size, index) => (
          <option key={index} value={size}>{size}</option>
        ))}
      </select>

      <h2><FontAwesomeIcon icon={faSortAmountUp} /> <FontAwesomeIcon icon={faSortAmountDown} /> Sort by Price</h2>
      <select value={selectedSort} onChange={handleSortChange} className={styles.sortSelect}>
        <option value="">No Sorting</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
