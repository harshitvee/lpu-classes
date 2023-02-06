import { Link } from "react-router-dom";
const products = [
    {
        id: "1",
        name: "Phone",
        price: 12000,
        img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description:
            "I'm baby waistcoat bodega boys trust fund disrupt tumeric whatever vexillologist. Cold-pressed raclette vice tousled etsy forage. Irony you probably haven't heard of them scenester, messenger bag tousled hammock stumptown tofu. Drinking vinegar chicharrones direct trade hoodie banh mi chia lo-fi bicycle rights iPhone XOXO pok pok austin ethical etsy.",
    },
    {
        id: "2",
        name: "TV",
        price: 20000,
        img: "https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description:
            "I'm baby waistcoat bodega boys trust fund disrupt tumeric whatever vexillologist. Cold-pressed raclette vice tousled etsy forage. Irony you probably haven't heard of them scenester, messenger bag tousled hammock stumptown tofu. Drinking vinegar chicharrones direct trade hoodie banh mi chia lo-fi bicycle rights iPhone XOXO pok pok austin ethical etsy.",
    },
    {
        id: "3",
        name: "Laptop",
        price: 30000,
        img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
        description:
            "I'm baby waistcoat bodega boys trust fund disrupt tumeric whatever vexillologist. Cold-pressed raclette vice tousled etsy forage. Irony you probably haven't heard of them scenester, messenger bag tousled hammock stumptown tofu. Drinking vinegar chicharrones direct trade hoodie banh mi chia lo-fi bicycle rights iPhone XOXO pok pok austin ethical etsy.",
    },
];
function Products() {
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
