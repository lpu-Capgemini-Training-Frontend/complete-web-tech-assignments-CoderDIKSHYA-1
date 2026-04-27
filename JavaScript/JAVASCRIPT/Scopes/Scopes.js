//There are 3 Scopes in JavaScript
//Scopes are used to define the visibility of variables and functions.
//1. Global Scope -> Outside of any function or block of code is called Global Scope .(var, let, const)
//2. Local Scope -> Inside a function or block of code is called Local Scope (var)
//3. Block Scope -> Inside a block of code is called Block Scope( let , const)


// let message ="Hyy"
// function sum(){

// var value01 =1;
// var value02 =2;
// let value03 =3;
// const value04 =4
// }

// sum();
// console.log(message); //message is not accessible outside the function
// console.log(value01);//value01 is not accessible outside the function
// console.log(value02);//value02 is not accessible outside the function
// console.log(value03);//value03 is not accessible outside the function
// console.log(value04);// value04 is not accessible outside the function

// if(true){
//     var message02 ="Keep silent"
// }
// console.log(message02);

// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);

// if(true){
//     let message03 ="Keep quiet"
//     console.log(message03);
// }


// if(true){
//     const message04 ="Keep waiting"
//     console.log(message04);
// }

//Global scope 
//Example-1

// var message01 = "Hello World"
// console.log(message01);

// let message02 = "Hello World"
// console.log(message02);

// const message03 = "Hello World"
// console.log(message03);

//Local Scope
//Example-2

function sum(){

var value01 =1;
var value02 =2;
let value03 =3;
const value04 =4
}

sum();
console.log(value01);
console.log(value02);
console.log(value03);
console.log(value04);

//Block Scope
//Example-3

// if(true){
//     let message03 ="Keep quiet"
//     console.log(message03);
// }
// if(true){
//     const message04 ="Keep waiting"
//     console.log(message04);
    
// }