import "./App.css";
import Root from "./layouts/Root";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<h1>Home Page</h1>} />
            <Route path="about" element={<h1>About Page</h1>} />
            <Route path="contact" element={<h1>Contact Page</h1>} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
