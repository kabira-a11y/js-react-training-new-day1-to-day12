function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

function sumWithArguments() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("Rest parameter sum():", sum());             
console.log("Rest parameter sum(10, 20):", sum(10, 20)); 
console.log("Arguments sum(5, 15):", sumWithArguments(5, 15))