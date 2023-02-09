import { useProductsContext } from "../contexts/products_context";

function Products() {
    const { products } = useProductsContext();
    return (
        <div>
            {products.map((product) => (
                <p>{product.name}</p>
            ))}
        </div>
    );
}

export default Products;
