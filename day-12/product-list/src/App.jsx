import { useState } from "react";
import { products } from "./data/products.js";
import CategoryFilter from "./components/CategoryFilter.jsx";
import ProductList from "./components/ProductList.jsx";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="app">
      <header className="page-header">
        <h1>Product List</h1>
        <p>Browse our products by category</p>
      </header>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <p className="product-count">
        Showing <strong>{filteredProducts.length}</strong>{" "}
        {filteredProducts.length === 1 ? "product" : "products"}
      </p>

      <ProductList products={filteredProducts} />
    </main>
  );
}

export default App;