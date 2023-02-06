import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return (
        <nav className="container nav">
            <h2 className="logo">
                <Link to="/">logo</Link>
            </h2>
            <ul className="nav-items">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
