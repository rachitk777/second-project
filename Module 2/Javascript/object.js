//empty object
// let obj = {};
// console.log(obj);

// let objrachit = {
// Name : 'Rachit',
// Age : 25 ,
// Number : 9999999999,
// City : 'Guwahati',
// };

let captAmerica = {     //declaring an object 
    name : 'Steve',                    //key:value pair
    Age : 9999 ,
    Friends :['Thor','Natasha','Tony'] ,
    address : {
        city : 'Queens',
        State : 'Assam' ,
    } ,

    SayHi : function(){
        console.log('Capt America Says Hi')
    }

} 
// console.log(captAmerica) ;
//Access key name through object
console.log(captAmerica.name);
//Age
console.log(captAmerica.Age);
//Friends
console.log(captAmerica.Friends);
//Address
console.log(captAmerica.address.State);
//call fxn sayHi
captAmerica.SayHi();
// console.log(captAmerica.SayHi());


//another way to excess objects(without dot operator)
console.log(captAmerica['name']) ; //'name' else show error
//deleta key
delete captAmerica.name;
console.log(captAmerica['name']) ;