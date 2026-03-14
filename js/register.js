function registerUser(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let dob=document.getElementById("dob").value;
let district=document.getElementById("district").value;

if(name==""||phone==""||dob==""||district==""){
alert("Please fill all details");
return;
}

let user={
name:name,
phone:phone,
dob:dob,
district:district
};

localStorage.setItem(phone,JSON.stringify(user));

alert("Registration Successful");

window.location.href="login.html";

}