import React from "react";
import Product from "../components/Product";
import { useProductsContext } from "../contexts/products_context";
function Home() {
    const { products } = useProductsContext();
    const featuredProducts = products.filter((product) => product.featured);
    return (
        <div className="container">
            <h2>Featured Products</h2>
            <div className=" gridContainer">
                {featuredProducts.map((product) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        img={product.img}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
