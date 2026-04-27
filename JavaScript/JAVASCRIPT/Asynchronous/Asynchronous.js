//Asynschronous programming
//Asynchronous programming is a programming paradigm that
//  allows a program to execute multiple tasks concurrently 
// without blocking the main thread.
//is often used in web development
//  to handle tasks such as fetching data from a server,
//  updating the UI, and handling user input.

// Set Interval and setTimeout

//setInterval(the task,time)
//what is setInterval -> it is used to run a task repeatedly at a specified interval of time.
// it is a non-blocking function

// let count =0;
// let interval01= setInterval(()=> {
//     console.log("Dikshya is great")
//     count++;
//     if(count == 6){
//         clearInterval(interval01);
//     }
// },5000);
// console.log("Today is Friday");
// console.log("At 3 o clock we have capgemini meetings");


//setTimeout -> it is used to run a task once after a specified delay of time.
//it is a non-blocking function

// setTimeout(()=>{
//     console.log("Give response immediately when asked");
// },3000);

//  console.log("Today is Friday");
//  console.log("At 3 o clock we have capgemini meetings");


//  function repeat() {
//     console.log("Give response immediately when asked");
    
//     setTimeout(repeat, 3000); // calls itself again after 3 sec
// }

// repeat();

// console.log("Today is Friday");
// console.log("At 3 o clock we have capgemini meetings");

