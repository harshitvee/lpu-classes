import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function Product({ name, price, img, id }) {
    return (
        <Link to={`/products/${id}`} className={styles.productContainer}>
            <img src={img} alt={name} className={styles.productImg} />
            <p>{name}</p>
            <p>{price}</p>
        </Link>
    );
}

export default Product;
