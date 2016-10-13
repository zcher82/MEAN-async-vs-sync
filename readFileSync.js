// synchronous coding, the second method blocks the last console log.
// the file has to be read before "app continues" is logged

var fs = require('fs');

console.log("Going to get a file");
var file = fs.readFileSync('readFileSync.js');
console.log("got the file");

console.log("App continues...");
