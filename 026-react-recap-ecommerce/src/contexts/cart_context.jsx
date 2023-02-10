import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, []);
    return (
        <CartContext.Provider
            value={{
                cart: cart,
                dispatch: dispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}
