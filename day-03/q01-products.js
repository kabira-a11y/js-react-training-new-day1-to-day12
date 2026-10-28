const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 185000, stock: 4 },
    { id: 2, name: "Mouse", category: "Electronics", price: 2500, stock: 40 },
    { id: 3, name: "Office Chair", category: "Furniture", price: 32000, stock: 0 },
    { id: 4, name: "Desk", category: "Furniture", price: 45000, stock: 6 },
    { id: 5, name: "Notebook", category: "Stationery", price: 350, stock: 200 },
    { id: 6, name: "Pen Pack", category: "Stationery", price: 600, stock: 0 },
    { id: 7, name: "Monitor", category: "Electronics", price: 62000, stock: 9 },
    { id: 8, name: "Bookshelf", category: "Furniture", price: 28000, stock: 3 }
];

let totalValue = 0;

for (let i = 0; i < products.length; i++) {
    totalValue = totalValue + products[i].price * products[i].stock;
}

console.log("Total stock value:", totalValue);

let cheapest = products[0];

for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapest.price) {
        cheapest = products[i];
    }
}

console.log("Cheapest product:", cheapest.name);

const outOfStock = products.filter(function(product) {
    return product.stock === 0;
});

console.log("Out of stock:", outOfStock.map(function(product) {
    return product.name;
}));

let categoryCount = {};


for (let i = 0; i < products.length; i++) {
    let category = products[i].category;

    if (categoryCount[category] === undefined) {
        categoryCount[category] = 1;
    } else {
        categoryCount[category]++;
    }
}

console.log("Category count:", categoryCount);

const sortedProducts = [...products].sort(function(a, b) {
    return a.price - b.price;
});

console.log("Sorted products:", sortedProducts);