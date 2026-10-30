import { products } from "../data/products";
import { useTheme } from "../context/ThemeContext";

function ProductList({ dispatch }) {
  const { theme } = useTheme();

  return (
    <section className={`products-section ${theme}`}>
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>

            <p>
              Price: Rs. {product.price.toLocaleString("en-PK")}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;