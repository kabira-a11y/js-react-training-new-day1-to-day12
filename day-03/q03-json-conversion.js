const jsonString = JSON.stringify(products);

console.log(jsonString);

const newProducts = JSON.parse(jsonString);

console.log(newProducts);

products[0].date = new Date();
products[0].extra = undefined;
products[0].myFunction = function() {
    console.log("Hello");
};

const newJson = JSON.stringify(products);

console.log(newJson);