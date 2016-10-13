// when running in node, what we'll see is that there will be a delay in the process, after console.log(1), because
// the second function is blocking the main process, delaying the second console.log(2)

var child_process = require('child_process');

console.log(1);

//the child process that will process the fibonacci computation function, freeing up the main node process
var newProcess = child_process.spawn('node', ['fibonacci.js'], {
  stdio : 'inherit' //this logs the child process console.log into the main log
});

console.log(2);
