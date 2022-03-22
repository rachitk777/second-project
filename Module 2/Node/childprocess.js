let cp = require('child_process')  ;  //child_process is used run a file using anathor file
                                      //Require means read,execute and return object
// cp.execFileSync('calc');

let content = cp.execSync('node test.js');
// console.log("Output of test.js is"+content);
console.log("" +content);