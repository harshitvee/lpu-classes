import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./contexts/products_context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ProductsProvider>
        <App />
    </ProductsProvider>
);
