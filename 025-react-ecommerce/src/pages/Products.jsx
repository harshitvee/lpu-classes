import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// using useEffect

// using react router dom
const URL = "http://localhost:3000/products";
function Products() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div>
            <h2>All products</h2>
            {products.map((product) => {
                return (
                    <div
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
