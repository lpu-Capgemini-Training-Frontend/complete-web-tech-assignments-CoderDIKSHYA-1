// parent.js

import studentName, { dikshyaMatriculationMark, khushiIntermediateMark } from './a.js';

console.log("Student Name:", studentName);
console.log("Dikshya Matriculation Marks:", dikshyaMatriculationMark);
console.log("Khushi Intermediate Marks:", khushiIntermediateMark);

//default export -default export is optional, but it is included for learning
//(you could change the name of the informaton)

//there is only one default export ina single js file 
//named export ( you have to use same name as you are exporting)

let resultOfSum = sum(10,20)
let resultOfSubstraction = substract(10,20)
console.log(resultOfSum);
console.log(resultOfSubstraction);
//console.log(sumOfDikshyaAndKhushi);

function sum(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}   