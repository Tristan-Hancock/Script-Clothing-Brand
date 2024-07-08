// components/Navbar.js
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../images/scriptlogo.jpg';
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>Home</Link>
                <div className={styles.dropdown}>
                    <Link to="" className={styles.link}>Shop</Link>
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
            <div className={styles.icons}>
                <Link to="/wishlist" className={styles.wishlistIcon}><FaHeart /></Link>
                <Link to="/cart" className={styles.cartIcon}><FaBagShopping /></Link>
            </div>
        </nav>
    );
};

export default Navbar;
