let path = require("path");
// console.log(path);

let extName = path.extname(" C:\Users\rachi\Downloads\FJP-6\Module 2\Javascript\array.js") ;  
console.log(extName);    //returns the extension of the file

// let baseName = path.basename("C:\Users\rachi\Downloads\FJP-6\Module 2\Javascript\object.js") ;
// console.log(baseName);    //returns base name of the file

// console.log(__filename);    //return the path of path.js file we are working in
// console.log("To clearly see the differencr between these two");
let dirpath = __dirname;      //returns path of directory in which our file lies
console.log(dirpath);

let newfilepath = path.join(dirpath,"test123.js");    //return paths of dirpath and joins test123.js after that
console.log(newfilepath) ;                            //bacisally joins two paths

