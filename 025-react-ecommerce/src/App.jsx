import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
} from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />} path="/">
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
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
