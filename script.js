/*
const time = document.getElementById("time")
time.addEventListener("input", timeFunction)
function timeFunction() {
  time.innerText = currentTime.value + ""
}

hour, minute, second, am/pms

day, month, daynumber, year
*/

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var myDate = new Date();
    month = myDate.getMonth();
    date = myDate.getDate();
    day = myDate.getDay();
    year = myDate.getFullYear();

var monthprint = months[month];
var dayprint = days[day];

document.getElementById("date").innerHTML = dayprint + ", " + monthprint +" "+ date +" "+ year;