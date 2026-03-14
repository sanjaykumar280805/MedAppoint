function bookDoctor(doctorName){

localStorage.setItem("doctor", doctorName);

// appointment time already login page la iruku
let time = localStorage.getItem("appointmentTime");

window.location.href="payment.html";

}