import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />} path="/">
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    )
);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
