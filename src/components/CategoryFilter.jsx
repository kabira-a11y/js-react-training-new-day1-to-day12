const categories = [
  "All",
  "Electronics",
  "Furniture",
  "Stationery",
];

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category ? "filter-btn active" : "filter-btn"
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;