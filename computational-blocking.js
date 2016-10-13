// when running in node, what we'll see is that there will be a delay in the process, after console.log(1), because
// the second function is blocking the main process, delaying the second console.log(2)

// because this is computational operation, not simple input/output (i/o), we cannot make it run asynchronously.
// we do not want this operation to run in main node process, so we create a child process to run another node
// command to run this function, in order to avoid blocking the main node process. **see computational-non-blocking.js**

console.log(1);

require('./fibonacci.js');

console.log(2);
