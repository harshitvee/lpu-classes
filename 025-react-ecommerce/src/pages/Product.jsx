import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../App";
import { ProductsURL } from "../constants";

const productLoader = async ({ params }) => {
    const response = await fetch(`${ProductsURL}/${params.id}`);
    const data = await response.json();
    return data;
};
function Product() {
    const { dispatch } = useContext(CartContext);

    const product = useLoaderData();
    function addToCart() {
        console.log("ADD To cart");
        dispatch({ type: "ADD_PRODUCT", payload: product });
    }
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
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;
export { productLoader };
