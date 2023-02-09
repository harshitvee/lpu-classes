import { createContext, useReducer } from "react";
const CartContext = createContext();

const initialCartState = [];
function cartReducer(cartState, action) {
    if (action.type === "ADD_PRODUCT") {
        return [...cartState, action.payload];
    }
    return cartState;
}

function CartProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider
            value={{ dispatch: dispatch, cartState: cartState }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, CartContext };
