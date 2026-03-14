// load details
let name = localStorage.getItem("patientName");
let doctor = localStorage.getItem("doctor");
let time = localStorage.getItem("appointmentTime");

document.getElementById("patientName").innerText = "Patient: " + name;
document.getElementById("doctorName").innerText = "Doctor: " + doctor;
document.getElementById("appointmentTime").innerText = "Time: " + time;

// download appointment
function downloadAppointment(){

let content =
"MEDAPPOINT APPOINTMENT\n\n" +
"Patient Name: " + name + "\n" +
"Doctor: " + doctor + "\n" +
"Time: " + time + "\n\n" +
"Status: Confirmed";

let blob = new Blob([content], { type: "text/plain" });

let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "appointment.txt";

a.click();

}

