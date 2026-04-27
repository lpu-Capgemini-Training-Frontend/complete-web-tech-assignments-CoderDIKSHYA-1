//targeting the html element
let h1 = document.getElementById("heading01")
// let h1 = document.getElementsByClassName("heading")
console.log(h1);

//change the content
// h1.innerText = "Hello World <br> Hello guys"
// h1.innerHTML = "Hello World <br> <p style='background-color:red'> Hello guys</p>" 

let p1 = document.querySelector("p")
console.log(p1);
let h2 = document.querySelector("#heading02")
console.log(h2);
let p2 = document.getElementsByTagName("p")
console.log(p2);

h1.style.backgroundColor = "red"
h1.style.color="white"
h1.style.padding="20px"
document.body.style.margin=0
document.body.style.padding=0