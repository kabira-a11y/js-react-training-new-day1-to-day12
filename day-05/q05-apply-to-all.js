function applyToAll(arr, fn) {
  const result = [];
for (let item of arr) {
    result.push(fn(item));
  }
  return result;
}
const square = n => n * n;
const isEven = n => n % 2 === 0;
const testNumbers = [1, 2, 3, 4];

console.log(applyToAll(testNumbers, square)); 
console.log(applyToAll(testNumbers, isEven));