import React from "react";
import ReactDOM from "react-dom/client";

import { CartProvider } from "./contexts/cart_context";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
        <App />
    </CartProvider>
);
