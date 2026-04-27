//Decison Making - this means to make a decision based on the conditions and perform a specific action.

//simple if 
//if else
//else if ladder
//nested if else
//switch

//---------------------------------------------------simple if----------------------------------------------------------------------------------
let sirIsAvailable = true; //variable
let mood = false
if(sirIsAvailable){
    if(mood){
    function attendClasses(){
        console.log("We need to go and attend the classes");

    }

    attendClasses();
}
console.log("Sir is available but no mood to attend the class.");
    console.log("We will give excuses to sir");
}
 
//------------------IF ELSE --------------------------------------------------------------------------------------------------------------------
let foodAvailable =true;
if(foodAvailable){
    console.log("We will eat the food");
}else{

    console.log("We will not eat the food");
}

//What is Ternary Operator?
//Ternary Operator is a conditional operator that is used to assign a value to a variable based on a condition.
//It is a short form of if-else statement or decision making.
//It accepts minimum three operands: condition, true value, and false value.
//condition ? true part/if part : false part/else part
//syntax:
//condition ? true : false
//condition ? true : false
    

let dikshyaAge = 23;
let sanjanaAge = 22;

let whoWillGetMorePriority = dikshyaAge > sanjanaAge ? "Dikshya" : "Sanjana";
console.log(whoWillGetMorePriority);

//waht is Global Execution Context?
//Global Execution Context is the context in which the code is executed.
//It is the outermost scope of the code and contains all the global variables and functions.
//It is also known as the "global scope".
//It is created when the code is executed and destroyed when the code is finished executing.

//It has Declaration phase and Execution phase.
//Declaration phase is when the variables and functions are declared and they are assigned a default value.
//Execution phase is when the code is executed.

//TDZ - Temporal Dead Zone
//TDZ is a temporary zone in which a variable is declared but not yet initialized.
//It is created when the variable is declared and destroyed when the variable is initialized.
//It is also known as the "temporal scope".

//HOW DO WE CALL A NESTED FUNCTION?
//We can call a nested function by using the function name followed by the arguments in the parenthesis.
//Nested function - It is a function that is defined inside another function.

//what is function currying?
//Function currying is a technique in functional programming that allows a function to accept multiple arguments one at a time.
//It is also known as "partial application".




function parent(value3, value4) {
    return function child(value1, value2) {
        return (value3 + value4) + (value1 + value2);
    }
}

let catchedValue = parent(40, 40)(20, 90);
console.log(catchedValue);