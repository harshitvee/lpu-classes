import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./contexts/products_context";
import { CartProvider } from "./contexts/cart_context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ProductsProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </ProductsProvider>
);
