import React from 'react';
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";
import styles from '../styles/Footer.module.css'; // Make sure the CSS path is correct

const Footer = () => {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <p>Contemporary designs flow and drape over the body in unique and flattering silhouettes that can be styled in a multitude of ways, resulting in a look that is both powerful and whimsical and always effortlessly stylish!</p>
                    <p>Owned By : Coastal Designer<br />GST No.: 33AAAPI1039F1ZF</p>
                    <div className={styles.logo}>
                        <h2>KAVERI</h2>
                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                <FaBehance />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footerSection} ${styles.center}`}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/shipping">Shipping & Returns</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/stores">Our Stores</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>Let's Share the Love</h4>
                    <p>Stay updated with all good things from Kaveri, offers, promotions, new stores and our latest collections.</p>
                    <div className={styles.subscribe}>
                        <input type="email" placeholder="Enter email" />
                        <button type="submit">→</button>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2024 KAVERI. Powered by Shopify</p>
            </div>
        </footer>
    );
};

export default Footer;
