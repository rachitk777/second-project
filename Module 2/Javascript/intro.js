// //printing in javaScript
// console.log("Hello Pepcoders") ;
 
// //number

// let a = 34;
// console.log(a);

// //character
// let character = 'Rachit' ;
// console.log(character) ;

// // loop
// for(let i=0;i<10;i++) 
// {
//     console.log(i);
// }

//Prime or not
let num = 92;
let flag = 1;
for (let i=2;i*i<num;i++){
    if (num%i==0){
        flag =0;
        break;
    }
}
if(flag==0){
    console.log("Not Prime!") ;  
}if(flag==1){
    console.log("Prime");
};
//functionn just like java

//IIFE  immeadiately invoked function Expression

(function(){
console.log("Hello IIFE");

}) () ;

//IIFE with parameter
(function(num1,num2){

console.log(num1+num2) ;
}) (29,13);