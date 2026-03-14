function checkUser(){

let phone = document.getElementById("phone").value;

if(phone=="" || phone.length!=10){
alert("Enter valid 10 digit mobile number");
return;
}

let user = localStorage.getItem(phone);

localStorage.setItem("currentUser",phone);

if(user){
window.location.href="login.html";
}
else{
window.location.href="register.html";
}

}