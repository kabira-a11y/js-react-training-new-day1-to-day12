function createCounter() {
    let count = 0;
 return {
     increment: function() {
            count++; },
decrement: function() {
      count--; },
getValue: function() {
            return count;}
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment();
counter1.increment();
counter2.increment();

