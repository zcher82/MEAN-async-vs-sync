//Asynchronous coding....even though the file needs to be read first, node process continues parsing code.
// we'll see "goind to get a file", THEN "app continues", and FINALLY "going to get a file"


// with anonymous callback, calling console.log from inside anonymous function
 var fs = require('fs');

console.log("Going to get a file");
fs.readFile('readFileSync.js', function (err, file) {
  console.log("got the file");
});

console.log("App continues...");


//...............(un-comment section below and comment out top section to test between anonymous and named function)............

// with named function, calling console.log from named function

// var fs = require('fs');
//
// var onFileLoad = function(err, file) {
//   console.log("got the file");
// };
//
// console.log("going to get a file");
// fs.readFile('readFileSync.js', onFileLoad);
//
// console.log("app continues...");
