//All this request will be handled by the browser and will be sent to the server
//javascript will make all this request  and send to the backend server
//http verbs - means to handle the request
//GET - it is used to fetch data from the server
//POST - it is used to send data to the server
//PUT - it is used to update data on the server
//DELETE - it is used to delete data from the server
//PATCH - it is used to update part of the data on the server
//HEAD - it is used to fetch the headers of the response
//OPTIONS - it is used to fetch the options of the response
//CONNECT - it is used to connect to the server

//What is the only way to communicate with the backend in javascript?
//Fetch API - it is used to communicate with the backend using  useImperativeHandle(
  
// let api01 = "https://jsonplaceholder.typicode.com/posts";
// ✔ Stores API endpoint (URL) in a variable.

// function fetchDataFromBackend(){
// ✔ Declares a function to fetch data from backend.

// let promise = fetch(api01);
// ✔ Calls `fetch()` → sends HTTP request
// ✔ Returns a **Promise (initially pending)**

// console.log(promise)

// ✔ Prints Promise object → usually `Promise { <pending> }`

// promise.then((response) => response.json())


// ✔ Runs when request is successful
// ✔ `response` = raw HTTP response
// ✔ `response.json()` → converts to JSON
// ✔ Returns another **Promise**
// .then((data) => console.log(data))


// ✔ Executes after JSON is parsed
// ✔ `data` = actual API data (array/object)
// ✔ Prints data

// .catch((errorMessage) => console.log(errorMessage))


// ✔ Handles errors (network/API issues)
// ✔ Prevents program crash

// .finally(() => console.log("Promise is completed"));

// ✔ Always runs (success or error)
// ✔ Used for cleanup or final message


// ✔ Ends function

// fetchDataFromBackend();
// ✔ Calls the function → starts execution

// # 🔥 One-Line Summary

// 👉 `fetch → promise → then → json → then(data) → catch(error) → finally(always)`

// let api01="https://jsonplaceholder.typicode.com/posts";

// function fetchDataFromBackend(){
//     let promise = fetch(api01);
//     console.log(promise)
//     promise.then((response)=> response.json())
//     .then((data)=> console.log(data)).catch((errorMessage)=> 
//         console.log(errorMessage)).finally(()=> console.log("Promise is completed"));
// }

// fetchDataFromBackend();


let api02 ="https://api.github.com/users";
//asysnc = awaitis the modern way for handling asynchronous operations
 async function getDataFromBackend(){
    try{
 let response = await fetch(api02);
 let data =  await response.json();
 //console.log(response);
 console.log(data);
     
 } catch (error){
     console.log(error);
 }

 getDataFromBackend();


 //axios - it is a promise-based HTTP client for the browser and node.js
 //for handling APIs (modern way) for asynchronous operations (async await + axios) and modern 
// way to handle apis

 //HTTPClient - it is a promise-based HTTP client for the browser and node.js to handle APIs