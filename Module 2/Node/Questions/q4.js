// read content of unorganised folder and make  an array which has extension name of each file
let path = require('path');
let fs = require('fs');

//written just to check the path
let dirpath = __dirname;      //returns path of directory in which our file lies
console.log(dirpath);

let folderkapath = path.join(__dirname,'..','Unorganised') ;
console.log(folderkapath);