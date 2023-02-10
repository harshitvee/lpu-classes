import { useProductsContext } from "../contexts/products_context";
import Product from "../components/Product";
function Products() {
    const { products } = useProductsContext();
    return (
        <div className="container gridContainer">
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                    id={product.id}
                />
            ))}
        </div>
    );
}

export default Products;
