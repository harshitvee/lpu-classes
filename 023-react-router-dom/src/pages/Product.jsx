import React from "react";
import { useLoaderData } from "react-router-dom";
function Product() {
    const { id, productName, price } = useLoaderData();
    return (
        <div>
            <h1>Name : {productName}</h1>
            <h1>id: {id}</h1>
            <h1>Price : {price}</h1>
        </div>
    );
}

export const singleProductLoader = async ({ params }) => {
    const { id } = params;
    const response = await fetch("http://localhost:3000/products/" + id);
    const data = await response.json();
    return data;
};

export default Product;
