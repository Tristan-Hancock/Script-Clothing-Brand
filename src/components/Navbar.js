import styles from '../styles/Navbar.module.css';
import logo from '../images/scriptlogo.jpg';
import { FaHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImg} />
            </div>
            <div className={styles.links}>
                <a href="#women" className={styles.link}>Home</a>
                <a href="#men" className={styles.link}>About Us</a>
                <a href="#home" className={styles.link}>Contact</a>
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
                <a href="#account" className={styles.accountIcon}><RiAccountCircleLine/> Account</a>
                <a href="#wishlist" className={styles.wishlistIcon}><FaHeart /> Wishlist</a>
                <a href="#cart" className={styles.cartIcon}><FaBagShopping /> Cart</a>
            </div>
        </nav>
    );
};

export default Navbar;
