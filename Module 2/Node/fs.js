let fs = require("fs");
console.log(fs);

//Create a file
let path = require('path');
let filepath = path.join(__dirname,"file.txt") ;  //directory path + file.txt (just got a string i.e. location of path)
console.log(filepath);           
fs.writeFileSync(filepath,"Write in the file or override in existing file");  //file.txt created and written/overridden

//R-read
console.log("Before update : ")
let content = fs.readFileSync(filePath,'utf-8');   //read file and diplay in utf-8 format
console.log(content);      //returns the content

//U-update
fs.appendFileSync(filePath,"\nNewly added content");  //write beside whats already written,Do not override
console.log("After update : ")    
console.log(fs.readFileSync(filePath,'utf-8'));

//D-delete
fs.unlinkSync(filePath);   //Delete the file 

