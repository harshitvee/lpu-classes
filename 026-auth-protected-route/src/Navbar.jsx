import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
    const { isAuthenticated } = useAuth0();
    return (
        <nav className={styles.nav}>
            <h1 className="logo">Logo</h1>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <Link to="/"> Home</Link>
                </li>

                <li className={styles.navItem}>
                    <Link to="/profile"> Profile</Link>
                </li>
                {isAuthenticated ? (
                    <li className={styles.navItem}>
                        <Link to="/logout"> Logout</Link>
                    </li>
                ) : (
                    <li className={styles.navItem}>
                        <Link to="/login"> Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
