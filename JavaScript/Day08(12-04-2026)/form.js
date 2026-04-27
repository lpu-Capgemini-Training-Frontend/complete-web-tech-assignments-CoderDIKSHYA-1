let form=document.getElementById("form")

form.addEventListener("submit",function(e){

e.preventDefault()

let user=document.getElementById("username")
let email=document.getElementById("email")
let pass=document.getElementById("password")
let confirm=document.getElementById("confirm")

let uErr=document.getElementById("userError")
let eErr=document.getElementById("emailError")
let pErr=document.getElementById("passError")
let cErr=document.getElementById("confirmError")

let valid=true

if(user.value.length<3 || user.value.length>25){
uErr.innerText="Username must be between 3 and 25 characters"
user.classList.add("error")
valid=false
}
else{
uErr.innerText=""
user.classList.remove("error")
user.classList.add("success")
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
if(!email.value.match(emailPattern)){
eErr.innerText="Enter valid email"
email.classList.add("error")
valid=false
}
else{
eErr.innerText=""
email.classList.remove("error")
email.classList.add("success")
}

let passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
if(!pass.value.match(passPattern)){
pErr.innerText="Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)"
pass.classList.add("error")
valid=false
}
else{
pErr.innerText=""
pass.classList.remove("error")
pass.classList.add("success")
}

if(confirm.value!==pass.value || confirm.value==""){
cErr.innerText="Passwords do not match"
confirm.classList.add("error")
valid=false
}
else{
cErr.innerText=""
confirm.classList.remove("error")
confirm.classList.add("success")
}

if(valid){
alert("Form submitted")
}

})