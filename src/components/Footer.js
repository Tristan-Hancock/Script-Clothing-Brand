import React from 'react';
import { FaInstagram } from "react-icons/fa";

import styles from '../styles/Footer.module.css'; // Make sure the CSS path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
    const Footer = () => {
        return (
            <footer className={styles.siteFooter}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h4>Contact Us</h4>
                        <p>(123) 456-7890</p>
                        <p>email@example.com</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Follow Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Legal</h4>
                        <a href="/terms">Terms & Conditions</a>
                    </div>
                </div>
            </footer>
        );
    };
    
export default Footer;
