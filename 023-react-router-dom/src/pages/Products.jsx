import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Products() {
    const products = useLoaderData();
    return (
        <>
            <h1>Products</h1>
            {products.map((product) => (
                <Link to={product.id.toString()}>
                    <p>{product.productName}</p>
                </Link>
            ))}
        </>
    );
}

// async function hello() {}

const productsLoader = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data;
};

export { productsLoader };
export default Products;
