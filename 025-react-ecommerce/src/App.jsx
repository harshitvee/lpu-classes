import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import {
    About,
    Cart,
    HomePage,
    Products,
    Product,
    ProtectedRoute,
    Checkout,
} from "./pages";
import { RootLayout } from "./layouts";

import { productsLoader } from "./pages/Products";
import { productLoader } from "./pages/Product";
import { useReducer, createContext } from "react";

const CartContext = createContext();

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />} path="/">
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route
                path="/products"
                element={<Products />}
                loader={productsLoader}
            />
            <Route
                path="/products/:id"
                element={<Product />}
                loader={productLoader}
            />
            <Route
                path="/checkout"
                element={
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                }
                loader={productLoader}
            />
        </Route>
    )
);
const initialCartState = [];
function cartReducer(cartState, action) {
    if (action.type === "ADD_PRODUCT") {
        return [...cartState, action.payload];
    }
    return cartState;
}

function App() {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
    return (
        <CartContext.Provider
            value={{ dispatch: dispatch, cartState: cartState }}
        >
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </CartContext.Provider>
    );
}

export default App;

export { CartContext };
