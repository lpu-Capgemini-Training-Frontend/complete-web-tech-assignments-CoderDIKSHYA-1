//What is Promise in JavaScript?
//Promise is a JavaScript object that represents the eventual completion 
// or failure of an asynchronous operation. It is used to handle the success 
//or failure of an asynchronous task in a non-blocking way.

let promise = new Promise((resolve, rejected) => {
 resolve("This Promise is Fulfilled");
 //rejected("The promise is rejected, Having some issues/ errors");
});
console.log(promise);


//purpose of .then and .catch
//.then is used to handle the success of a promise and collect the data
// while .catch is used to handle the failure of a promise and collect the error

//promise.then((data)=>{console.log(data)}).catch((error)=>{console.log(error)});

//.finally - it is used to handle the completion of a promise regardless of success or failure
//It will excecute whether the promise is fulfilled or rejected ,will execute by default

promise.then((data)=>{console.log(data)}).catch((error)=>{console.log(error)}).finally(()=>{console.log("Promise is completed")});


