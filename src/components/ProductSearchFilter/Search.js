// components/Search.js
import React from 'react';
import styles from '../styles/Search.module.css';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        placeholder="Search for products..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className={styles.searchInput} 
      />
    </div>
  );
};

export default Search;
