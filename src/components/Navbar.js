import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../images/scriptlogo.jpg';
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>Home</Link>
                <div className={styles.dropdown}>
                    <Link to="/shop" className={styles.link}>Shop</Link>
                    <div className={styles.dropdownContent}>
                        <Link to="/all">ALL</Link>
                        <Link to="/co-ord-sets">Co-ord sets</Link>
                        <Link to="/shirts">Shirts</Link>
                        <Link to="/dresses">Dresses</Link>
                    </div>
                </div>
                <Link to="/shop-men" className={styles.link}>Shop Men</Link>
                <Link to="/about-us" className={styles.link}>About Us</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.search}>
                <div className={styles.group}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.searchIcon}>
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input type="search" placeholder="Search for products" className={styles.input} />
                </div>
            </div>
            <div className={styles.icons}>
            <Link to="/unavailable" className={styles.accountIcon}>Account</Link>
            <Link to="/wishlist" className={styles.wishlistIcon}><FaHeart /> </Link>
                <Link to="/cart" className={styles.cartIcon}><FaBagShopping /> </Link>
            </div>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <h2>Login using mobile</h2>
                <p>Kindly enter the 10-digit mobile number and verify using OTP.</p>
                <input type="text" placeholder="Mobile Number +91 XXX-XXX-XXXX" />
                <button onClick={() => {}}>Submit</button>
                <p>By signing in, I agree to Terms & Conditions and Privacy Policy</p>
            </Modal>
        </nav>
    );
};

export default Navbar;
