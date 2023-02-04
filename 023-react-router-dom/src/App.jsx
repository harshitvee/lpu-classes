import "./App.css";
import Root from "./layouts/Root";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Products, { productsLoader } from "./pages/Products";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductsLayout from "./layouts/ProductsLayout";
import { singleProductLoader } from "./pages/Product";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />

            <Route path="products" element={<ProductsLayout />}>
                <Route index element={<Products />} loader={productsLoader} />
                <Route
                    path=":id"
                    element={<Product />}
                    loader={singleProductLoader}
                />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

//  REST API
// frontend

// Rest API
// GET Request
// www.codprog.com/courses/react
// www.somewebsite.com/product/1
// www.somewebsite.com/products

// www.somewebiste.com/product [post]
// www.somewebiste.com/product/1 [delete]
// backend (Database , server)

// json server ---> fake rest api

export default App;
