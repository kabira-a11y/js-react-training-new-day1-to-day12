console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");



console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");



async function run() {
  console.log("start");
  await null;
  console.log("after await");
}

console.log("before");
run();
setTimeout(() => console.log("timeout"), 0);
console.log("end");
