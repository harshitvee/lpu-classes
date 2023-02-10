export default function reducer(products, action) {
    if (action.type === "REDUCE_QUANTITY") {
        return products.map((product) => {
            if (product.id === action.payload.id) {
                return { ...product, quantity: product.quantity - 1 };
            } else {
                return product;
            }
        });
    }
    return products;
}
