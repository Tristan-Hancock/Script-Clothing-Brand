import React from 'react';
import collections from '../data/collections';
import AllCard from '../components/AllCard';
import styles from '../styles/ShopAll.module.css';

const ShopAll = () => {
    return (
        <div className={styles.shopAllContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.filterSection}>
                    <h2>Sort by <button>+</button></h2>
                </div>
                <div className={styles.filterSection}>
                    <h2>Price <button>-</button></h2>
                    <div className={styles.priceRangeContainer}>
                        <input type="text" placeholder="₹0" className={styles.priceInput} />
                        <span> - </span>
                        <input type="text" placeholder="₹36500" className={styles.priceInput} />
                    </div>
                    <input type="range" min="0" max="36500" className={styles.priceRange} />
                </div>
                <div className={styles.filterSection}>
                    <h2>Product type <button>-</button></h2>
                    <ul>
                        <li>Co-ords</li>
                        <li>Dress</li>
                        <li>Dresses</li>
                        <li>Jacket Sets</li>
                        <li>Jumpsuits</li>
                        <li>Kaftans</li>
                        <li>Kurta Sets</li>
                        <li>Tops</li>
                    </ul>
                </div>
                <div className={styles.filterSection}>
                    <h2>Color <button>+</button></h2>
                </div>
                <div className={styles.filterSection}>
                    <h2>Availability <button>-</button></h2>
                    <ul>
                        <li>In stock</li>
                    </ul>
                </div>
                <div className={styles.filterSection}>
                    <h2>Size <button>-</button></h2>
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
                <h1 className={styles.heading}>Shop All</h1>
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
