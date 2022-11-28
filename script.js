/*
const time = document.getElementById("time")
time.addEventListener("input", timeFunction)
function timeFunction() {
  time.innerText = currentTime.value + ""
}

HR:MN:SC PM

*/

var myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    month = myDate.getMonth();
    date = myDate.getDate();
    day = myDate.getDay();
    year = myDate.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthprint = months[month];
var dayprint = days[day];

document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
document.getElementById("date").innerHTML = dayprint + ", " + monthprint +" "+ date +" "+ year;