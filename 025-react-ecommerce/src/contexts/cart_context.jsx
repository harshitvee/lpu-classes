import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cart_reducer";
const CartContext = createContext();

const initialCartState = [];

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
