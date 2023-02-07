import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";

function Cart() {
    const { cartState } = useContext(CartContext);
    return (
        <div>
            {cartState.map((product) => {
                return <div key={product.id}> {product.name}</div>;
            })}
        </div>
    );
}

export default Cart;
