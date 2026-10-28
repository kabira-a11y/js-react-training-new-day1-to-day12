function createGreeting(name = "Guest", greeting = "Hello") {
  return greeting + ", " + name + "!";
}

console.log(createGreeting());                     
console.log(createGreeting("Kabir", "Welcome"));