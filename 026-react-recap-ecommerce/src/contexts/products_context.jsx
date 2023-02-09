import { createContext } from "react";
import { products } from "../data";
import { useContext } from "react";
const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProductsContext() {
    return useContext(ProductsContext);
}
