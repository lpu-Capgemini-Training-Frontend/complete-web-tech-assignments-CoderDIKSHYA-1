let dikshyaIsStressed = false
console.log("Result =", (dikshyaIsStressed), typeof dikshyaIsStressed)

let dikshyaIsStressedAgain = "true"
console.log("Result =" ,(dikshyaIsStressedAgain), typeof dikshyaIsStressedAgain)

let dikshyaIsStressedAgainandAgain = +"true"
console.log("Result =" ,(dikshyaIsStressedAgainandAgain) , typeof dikshyaIsStressedAgainandAgain)

let value01= "10"
console.log("Result =" ,(value01), typeof value01)
let value02= +"10"
console.log("Result = " ,(value02), typeof value02)
let value03 ="10" + "10"
console.log("Result =" ,(value03), typeof value03)
let value04= +"10" + +"10"
console.log("Result =" ,(value04), typeof value04)


let name01 ="aditi"
console.log("Result =" ,(name01), typeof name01)

let bigNumber = 3474738383n
console.log("Result = " , (bigNumber),typeof bigNumber)
console.log(bigNumber)

let ageOfDikshya
console.log(ageOfDikshya)

let diksyaSpace=null
console.log(typeof null)// null is used to make a variable empty
console.log(typeof dikshyaSpace)

let student01="Dikshya"
let student02="Dikshya"

console.log("Are these same people", student01 ==student02)

let lpuStudent01 =Symbol("Dikshya")
let lpuStudent02 =Symbol("Dikshya")
console.log("Are these same people", lpuStudent01 == lpuStudent02)
//-------------------------------------------------------------------------------------------------------------------------
//symbol is used to make a variable unique
// ✅ Definition
// Symbol is a primitive data type introduced in ECMAScript 6 (ES6).
// It represents a unique and immutable value.

// 🔥 1. Basic Example
// const id1 = Symbol("id");
// const id2 = Symbol("id");

// console.log(id1 === id2); // false (always unique)

// 👉 Even with same description "id", both symbols are different.
//-------------------------------------------------------------------------------------------------------------------------
//Definition
// undefined means a variable has been declared but not assigned a value.

// 📌 When it occurs:
// Variable declared but not initialized
// Function doesn’t return anything
// Accessing non-existing object property
// Missing function parameters

// 🎯 Purpose:
// Indicates absence of value automatically
// Used internally by JavaScript engine
// Helps detect uninitialized variables

//-------------------------------------------------------------------------------------------------------------------------
// null means intentional absence of value (assigned by programmer).

// 📌 When it occurs:
// Explicitly set by developer
// Used to clear or reset a variable
// 💻 Example:
// let x = null;
// console.log(x); // null
// 🎯 Purpose:
// Represents empty or no value intentionally
// Used when you want to say:
// 👉 “This variable should have nothing”

