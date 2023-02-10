import { useReducer, createContext } from "react";
import { productsList } from "../data";
import { useContext } from "react";
import reducer from "../reducers/products_reducer";
const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, dispatch] = useReducer(reducer, productsList);
    return (
        <ProductsContext.Provider
            value={{
                products: products,
                dispatch: dispatch,
                title: "Products",
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    return useContext(ProductsContext);
}
