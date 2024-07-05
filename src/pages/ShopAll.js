import React from 'react';
import collections from '../data/collections';
import AllCard from '../components/AllCard';
import styles from '../styles/ShopAll.module.css';

const ShopAll = () => {
    return (
        <div className={styles.shopAllContainer}>
            <div className={styles.leftContainer}>
        
                <div className={styles.filterSection}>
                    <h2>Sizes<button>-</button></h2>
                    <ul>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.clothingGrid}>
                    {collections.map(item => (
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
