function sumNested(arr) {
    let sum = 0;
    for (let item of arr) {
        if (Array.isArray(item)) {
            sum = sum + sumNested(item);
        } else {
            sum = sum + item;
        }
    }
      return sum;
}
console.log(sumNested([1, [2, [3, 4]], 5]));