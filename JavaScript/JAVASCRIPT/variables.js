//variables in javascript

var className01="LPU Batch 3";
let className02="LPU Batch 4";
const className03="LPU Batch 5";
console.log(className01);
console.log(className02);
console.log(className03);   


//var variables
var age = 25;
var age
age=4000
console.log(age);
console.log(student01);
var student01
student01="John Doe";
var student01 //redeclare
student01="dikshya";
console.log(student01);

console.log(student02); //Cannot access 'student02' before initialization
let student02="Khushi"; //  cannot redeclare block-scoped variable student02
//let and const introduced in the es standard in 2015
console.log(student02);
//let student02
student02="Aditi";
console.log(student02);


var admin01
var admin02


//const variables

const admin ="Aditi";
const admin ="Aditi"; //SyntaxError: Identifier 'admin' has already been declared
admin="Khushi"; //TypeError: Assignment to constant variable.

//where is const is most suitable to use?
// the const is most suitable for arrays, objects,functions, etc. because 
// we can change the values of the properties of the objects, but we cannot change the reference of the object.