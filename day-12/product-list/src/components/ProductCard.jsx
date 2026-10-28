function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>

      <p className="category">{product.category}</p>

      <p className="price">
        Rs. {product.price.toLocaleString("en-PK")}
      </p>

      {product.stock === 0 ? (
        <p className="out-of-stock">Out of stock</p>
      ) : (
        <p className="in-stock">In stock: {product.stock}</p>
      )}
    </div>
  );
}

export default ProductCard;