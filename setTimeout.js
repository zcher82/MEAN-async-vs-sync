// testing asynchronous code...notice, console logs, 1, 3, THEN 2. 

console.log("1: Start app");

var holdOn = setTimeout(function() {
  console.log("2: In the setTimeout");
}, 1000);

console.log("3: End app");
