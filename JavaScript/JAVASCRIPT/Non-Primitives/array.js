//WHat is non primitive datatype?
//non-primitive data types in javascript - are those data types that are not primitive data types
//store multiple values in a sequential manner uses the indexes (how the vlaues are stored in varibales).
//means that they are not stored in the stack memory but in the heap memory

//1. array: it is a collection of values that can hold any type of data, including other arrays.
//2. function: it is a block of code that can be executed when called.
//3. object: it is a collection of key-value pairs that can hold any type of data, including other objects.
//4. date: it is a built-in object that represents a date and time.
//5. regex: it is a built-in object that represents a regular expression.
//6. map: it is a built-in object that represents a collection of key-value pairs.
//7. set: it is a built-in object that represents a collection of unique values.


let fruit = ["apple", "banana", "orange", "grapes", "mango"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
console.log(fruit.length);


let array=[true,"Hyy", 2000, 345565n, Symbol("Dikshya"), ["abc"], null, undefined];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array.length);


//Array Methods- the javascript people have given us some built-in methods to perform operations with the array data type for adding some
//values to the array
//1. push()- means to add the element at the end of the array
fruit.push("watermelon");
console.log(fruit);
//2. pop()- means to remove the element from the end of the array
fruit.pop();
console.log(fruit);
//3. shift()- means to remove the element from the start of the array
fruit.shift();
console.log(fruit);
//4. unshift()- means to add the element at the start of the array
fruit.unshift("Lichi");
console.log(fruit);
//5. splice()- means to remove the element from the array
//splice(means to add or remove the element from the array)
//splice(index, how many elements to remove)
fruit.splice(1,2);
console.log(fruit);
//splice(index, how many elements to remove, element to add)
fruit.splice(1,0,"Kiwi");
console.log(fruit);
//6. slice()- means to get the element from the array
fruit.slice(1,4);
console.log(fruit);
//7. concat()- means to merge the array
fruit.concat(fruit);
console.log(fruit);
//8. sort()- means to sort the array
fruit.sort();
console.log(fruit);
//9. reverse()- means to reverse the array
fruit.reverse();
console.log(fruit);
//10. indexOf()- means to get the index of the element
fruit.indexOf("apple");
console.log(fruit);
//11. lastIndexOf()- means to get the last index of the element
fruit.lastIndexOf("apple");
console.log(fruit);

//----------------MERGING OF ARRAY---------------------------------------------------------------------------------------------
let studentName =["Dikshya","Aditi","Khushi"];
let studentName01=["Sanjana","Sneha","Anjali"];
let studentName02=studentName.concat(studentName01);
console.log(studentName02);
console.log(`The length of the array is  ${studentName02.length}`);
//console.log(studentName);

//several ways to create an array
let array01=[1,2,3,4,5];
let array02=new Array(1,2,3,4,5);//by using array constructor
let array03=Array.of(1,2,3,4,5);//by using Array.of
console.log(array01);
console.log(array02);
console.log(array03);

//------------------creating an array of objects-----------------------------------------------------------------------------------------------
let marks10thofDikshya=[90,80,79,67,89];
console.log(marks10thofDikshya);
//recommened way to create an array of objects
//notes: an object is a collection of key-value pairs
//what is the recommended way to create an array of objects
//1. object literal- means to create an object by using object literal

let dikshyaMarks = {
    math : 90,
    physics : 80,
    chemistry : 79,
    biology : 67,
    english : 89
}

//2. object constructor- means to create an object by using object constructor by using object constructor

console.log(dikshyaMarks);
let obj2=new Object({
       math : 90,
    physics : 80,
    chemistry : 79,
    biology : 67,
    english : 89
})

console.log(obj2);
let obj3=new Object({
    math : 90,
    physics : 80,
    chemistry : 79,
    biology : 67,
    english : 89
})
console.log(obj3)

//add values into an objct - means to add the values into the object
console.log(dikshyaMarks)
dikshyaMarks.homescience=90
console.log(dikshyaMarks);

//delete values from an object- means to delete the values from the object
console.log(dikshyaMarks)
delete dikshyaMarks.english
console.log(dikshyaMarks);

//update any values from object- means to update the values from the object
console.log(dikshyaMarks)
dikshyaMarks.math=100
console.log(dikshyaMarks);

//Object Methods - the javascript people have given us some built-in methods to perform operations with the object data type for adding some
//values to the object
//1. Object.keys()- means to get the keys of the object
let listOfKeysFromDikshyaMarks=Object.keys(dikshyaMarks);
console.log(listOfKeysFromDikshyaMarks);
//2. Object.values()- means to get the values of the object
let listOfValuesFromDikshyaMarks01=Object.values(dikshyaMarks);
console.log(listOfValuesFromDikshyaMarks01);
//3. Object.entries()- means to get the entries of the object
console.log(Object.entries(dikshyaMarks));




