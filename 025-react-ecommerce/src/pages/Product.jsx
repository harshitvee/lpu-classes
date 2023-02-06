import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();

    return (
        <div>
            Single Product
            <p>id: {id}</p>
        </div>
    );
}

export default Product;
