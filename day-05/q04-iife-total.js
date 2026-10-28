(function () {
  const prices = [1200, 450, 3000];
  let total = 0;

  for (let price of prices) {
    total += price;
  }

  console.log("total:", total);})();

  try {
  console.log(prices); 
} catch (error) {
  console.log("Proof: 'prices' not working");
}

  