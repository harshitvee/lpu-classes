import React from "react";
import { useCartContext } from "../contexts/cart_context";
function Cart() {
    const { cart } = useCartContext();
    return (
        <div>
            {cart.map((item) => (
                <p>{item.name}</p>
            ))}
        </div>
    );
}

export default Cart;
