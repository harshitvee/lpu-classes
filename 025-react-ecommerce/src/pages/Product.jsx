import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setProduct(data);
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    // path="/products/:id"
    // url : https://localhost:5173/products/12

    return (
        <div
            style={{
                border: "2px solid white",
                margin: "1rem",
                width: "500px",
                padding: "1rem",
            }}
        >
            <img src={product.img} alt="" width="500px" />
            <p>Product name : {product.name}</p>
            <p>Product price : {product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default Product;
