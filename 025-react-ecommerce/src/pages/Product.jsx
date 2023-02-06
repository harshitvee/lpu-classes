import React from "react";
import { useParams } from "react-router-dom";
function Product() {
    // path="/products/:id"
    // url : https://localhost:5173/products/12
    const { id } = useParams(); // {id: 12}
    return <div>Single Product , id : {id}</div>;
}

export default Product;
