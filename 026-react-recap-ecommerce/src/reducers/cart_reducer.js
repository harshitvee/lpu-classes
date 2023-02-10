export default function reducer(cart, action) {
    if (action.type === "ADD_T0_CART") {
        return [...cart, action.payload];
    }
    return cart;
}
