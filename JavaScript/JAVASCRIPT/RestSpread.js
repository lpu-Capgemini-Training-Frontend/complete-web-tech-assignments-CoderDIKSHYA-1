//Spread -used with arrays and objects to expand them
//Rest -used with functions to collect multiple arguments into an array

//  let fruits01 =["apple", "banana", "orange", "grapes", "mango"];
//  let fruits02 =["Jackfruit", "Guava", "Papaya", ...fruits01];
//  console.log(fruits02.flat());

//  let fruits03 =[...fruits01, ...fruits02,"Lichi","Grapes"];
//  console.log(fruits03);


 //Destructing- used with arrays and objects to extract values from them(arrays and objects)
 //Rest -used with functions to collect multiple arguments into an array

let array01 =["Sanjana","Vignan","Pawan","Dikshya"];
let inf01 ={
    name:"Dikshya",
    city:"Jaipur",
    phone:1234567890
}
//console.log(array01);
//let [student01,student02,student03,student04]=array01;
// console.log(student01);
// console.log(student02);
// console.log(student03);
// console.log(student04);

// let {name,city,phone}=inf01;
// console.log(name, city ,phone);
// console.log(city);
// console.log(phone);

//Array destructing with rest - used with arrays and objects to extract values from them
let [stud01,stud02,...stud03]=array01;
console.log(stud01);  
console.log(stud02);
console.log(stud03);

//Object destructing with rest - used with arrays and objects to extract values from them
let {name,city,...phone}=inf01;
console.log(name);
console.log(city);
console.log(phone);