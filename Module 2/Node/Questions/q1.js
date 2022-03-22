//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

//Create a file
let fs = require('fs') ;

if(!fs.existsSync('Newfolder'){   //If the dir doesnot exist then create file
    fs.mkdirSync('Newfolder');  //folder created in this same directory which we are working in
}
//create a file inside the folder
//So first give path of this folder
let filekapath = path.join(__dirname,'Newfolder','newfile.txt');
console.log(filekapath);