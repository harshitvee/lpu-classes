import React from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";
import styles from "./SingleProduct.module.css";
import { toast } from "react-toastify";
function SingleProduct() {
    const { id } = useParams();
    const { dispatch: productDispatch, products } = useProductsContext();
    const { dispatch: cartDispatch, cart } = useCartContext();

    const singleProduct = products.find((product) => product.id === id);
    const { name, price, img, description, quantity, category } = singleProduct;
    const addToCart = () => {
        // check for out of stock
        if (quantity <= 0) {
            toast("Out of stock");
            return;
        }

        // check if item already present in cart
        for (let item of cart) {
            if (item.id === id) {
                toast("Already added to cart");
                return;
            }
        }

        cartDispatch({ type: "ADD_T0_CART", payload: singleProduct });
        productDispatch({ type: "REDUCE_QUANTITY", payload: { id: id } });
        toast("Added To cart");
    };
    return (
        <div className={` container ${styles.singleProductContainer}`}>
            <div className={styles.productImageContainer}>
                <img src={img} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.productInfo}>
                <h1>{name}</h1>

                <p>{description}</p>
                <p>{price}</p>
                <p>quantity: {quantity}</p>
                <p>category: {category}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default SingleProduct;
