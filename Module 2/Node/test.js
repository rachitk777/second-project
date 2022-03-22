let cp = require('child_process')  ;  //child_process is used run a file using anathor file

// cp.execFileSync('calc');

let content = cp.execSync('node test.js');
// console.log("Output of test.js is"+content);
console.log("" +content);