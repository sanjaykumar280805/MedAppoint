function goDoctors(){

let name=document.getElementById("name").value;
let dob=document.getElementById("dob").value;
let district=document.getElementById("district").value;
let time=document.getElementById("time").value;

if(name=="" || dob=="" || district=="" || time==""){
alert("Fill all details");
return;
}

localStorage.setItem("patientName",name);
localStorage.setItem("appointmentTime",time);

window.location.href="doctors.html";

}