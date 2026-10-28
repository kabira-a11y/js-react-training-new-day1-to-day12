const numbers = [3, 7, 3, 1, 7, 9, 1, 3];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

const uniqueNumbers2 = numbers.filter((num, index) => {
    return numbers.indexOf(num) === index;
});

console.log(uniqueNumbers2);