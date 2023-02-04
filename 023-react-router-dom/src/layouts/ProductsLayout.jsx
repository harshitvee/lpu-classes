import React from "react";
import { Outlet } from "react-router-dom";

function ProductsLayout() {
    return (
        <>
            <h1>ProductsLayout</h1>
            <Outlet />
        </>
    );
}

export default ProductsLayout;
