export default function cartReducer(cartState, action) {
    if (action.type === "ADD_PRODUCT") {
        return [...cartState, action.payload];
    }
    return cartState;
}
