/*
Topics:
1. Memory lifecycle
2. Stack vs Heap
3. Garbage Collection
4. Memory leaks
*/



console.log("STEP 1: Memory Lifecycle");

let student = {
  name: "Ali",
  age: 22
};


console.log(student.name);

student = null;

console.log("Student reference removed.");




console.log("STEP 2: References");

let first = {
  topic: "JavaScript"
};

let second = first;

first = null;

console.log(second.topic); // JavaScript

second = null;



console.log("STEP 3: Function Execution");

function calculateTotal(a, b) {
  const total = a + b;
  return total;
}

console.log(calculateTotal(10, 20));



console.log("STEP 4: Timer Cleanup");

let count = 0;

const timer = setInterval(() => {
  count++;
  console.log("Count:", count);
}, 1000);

// Stop the timer after 3 seconds
setTimeout(() => {
  clearInterval(timer);
  console.log("Timer stopped. No more counting.");
}, 3000);
