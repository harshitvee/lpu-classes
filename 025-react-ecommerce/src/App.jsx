import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { About, Cart, HomePage, Products, Product } from "./pages";
import { RootLayout } from "./layouts";

import { productsLoader } from "./pages/Products";
import { productLoader } from "./pages/Product";

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
        </Route>
    )
);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

// state
// usestate
// handle form
// props and children props
// useReducer
// context api
// routing
// protected routes
// authentication

// redux library --> (redux toolkit)
