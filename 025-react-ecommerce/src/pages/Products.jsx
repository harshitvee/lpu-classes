import { useEffect, useState } from "react";

import { ProductsURL } from "../constants";
// using useEffect

// using react router dom 6.4
// step 1: create a loader function
// step 2: export loader function
// step 3 : import loader in app.js (where you have created routes) and set value of loader property
// step 4 : import useLoaderData hook where you want to load data and call that hook.
import { Link, useLoaderData } from "react-router-dom";

const productsLoader = async () => {
    const response = await fetch(ProductsURL);
    const data = await response.json();
    return data;
};

function Products() {
    const products = useLoaderData();
    return (
        <div>
            <h2>All products</h2>
            {products.map((product) => {
                return (
                    <div
                        key={product.id}
                        style={{
                            border: "2px solid white",
                            margin: "1rem",
                            width: "500px",
                            padding: "1rem",
                        }}
                    >
                        <Link to={`/products/${product.id}`}>
                            <img
                                src={product.img}
                                alt={product.name}
                                width="400px"
                            />
                            <p> {product.name}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
export { productsLoader };
