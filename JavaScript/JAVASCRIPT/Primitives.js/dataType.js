//what is data type in javascript?
// Data type in javascript refers to the type of value that a variable can hold.
//type of datatype in javascript?
//primitive data types in javascript
//1. string: it is a sequence of characters enclosed in single or double quotes or backtick .
//2. number: it is a numeric value that can be an integer or a floating-point number.
//3. boolean: it is a logical value that can be either true or false.
//4. null: it is a special value that represents the absence of any value.
//5. undefined: it is a special value that represents the absence of a value or an uninitialized variable.
//6. symbol: it is a unique and immutable primitive value that can be used as a key for object properties.
//7. object: it is a collection of key-value pairs that can hold any type of data, including other objects.

//non-primitive data types in javascript
//what is non primitive datatype?
//non-primitive data types in javascript - are those data types that are not primitive data types
//means that they are not stored in the stack memory but in the heap memory

//1. array: it is a collection of values that can hold any type of data, including other arrays.
//2. function: it is a block of code that can be executed when called.
//3. object: it is a collection of key-value pairs that can hold any type of data, including other objects.
//4. date: it is a built-in object that represents a date and time.
//5. regex: it is a built-in object that represents a regular expression.
//6. map: it is a built-in object that represents a collection of key-value pairs.
//7. set: it is a built-in object that represents a collection of unique values.

//difference between primitive and non-primitive data types in javascript
//1. primitive data types are immutable, while non-primitive data types are mutable.
//2. primitive data types are stored in the stack, while non-primitive data types are stored in the heap.
//3. primitive data types are passed by value, while non-primitive data types are passed by reference.
//4. primitive data types have a fixed size, while non-primitive data types can grow or shrink in size.
//5. primitive data types can be compared using the === operator, while non-primitive data types cannot be compared using the === operator.


let day01="sunday";
console.log(day01);
day01="monday";
console.log(day01);


//!String data type in javascript
//1. string: it is a sequence of characters enclosed in single or double quotes or backtick
let name01="Aditi";
console.log(name01);
let name02='Khushi';
console.log(name02);
let name03=`Dikshya`;
console.log(name03); //string template literal
//waht is string template literal?
//string template literal is a way to embed variables and expressions in a string by enclosing them in backticks(`)

//!string Methods in javascript -to perform operations  with the string data type, the javascript
//people have given us some built-in methods to perform operations with the string data type.

//List of string Methods - the javascript people have given us some built-in methods to perform operations with the string data type
//1. toUpperCase()- means to convert the string into upper case 
//2. toLowerCase()- means to convert the string into lower case
//3. length- means to get the length of the string
//4. trim()- means to remove the spaces from the string
//5. includes()- means to check if the string contains the substring
//6. startsWith()- mdans to check if the string starts with the substring
//7. endsWith()-means to check if the string ends with the substring
//8. split()- means to split the string into an array of substrings
//9. replace()- means to replace the substring with the new substring
//9. repeat()- means to repeat the string n times
//10. charAt()- means to get the character at the specified index
//11. slice()- means to get the substring from the specified start index to the specified end index
//12. substring()- means to get the substring from the specified start index to the specified end index
//13. typeof- means to get the type of the variable

let message01 ="keep exploring ";
let message02 ="Have breakfast";
let message03 ="YOU can do it if there is a will";
let message04 ="Be attentive in the class";
let dikshyamessage05 ="Try to solve the problem by yourself and then use AI"

console.log(dikshyamessage05);
let storyDikshyaMessageInUpperCASE =dikshyamessage05.toUpperCase();
console.log(storyDikshyaMessageInUpperCASE);
console.log(dikshyamessage05.toLowerCase());
console.log(dikshyamessage05.length)
console.log("Total length of the dikshya message after trimming the string", dikshyamessage05.trim().length);
console.log("Is there Try present in the dikshya message",dikshyamessage05.includes("Try"));
console.log('Is there Try present in the dikshya message',dikshyamessage05.includes("Try"));
console.log(`Is there Try present in the dikshya message ${dikshyamessage05.includes("Try")}`);
console.log(typeof dikshyamessage05);


