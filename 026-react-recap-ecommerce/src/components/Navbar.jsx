import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>Ecom</h1>
            <ul className={styles.navItems}>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/products"> Products</Link>
                </li>
                <li>
                    <Link to="/cart"> Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
