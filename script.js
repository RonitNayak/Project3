function postTime() {

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
  var ordinal = "";
  var ampm = "";

  if (date== 1) {
    ordinal = "st"
  } else if (date==2) {
    ordinal = "nd"
  } else if (date==3) {
    ordinal = "rd"
  } else if (date==21) {
    ordinal = "st"
  } else if (date==22) {
    ordinal = "nd"
  } else if (date==23) {
    ordinal = "rd"
  } else if (date==31) {
    ordinal = "st"
  } else {
    ordinal = "th"
  }

  if (hours<12) {
    ampm = "AM"
  } else {
    (hours=hours-12), ampm = "PM";
  }

  function zeroNeeded(x) {
    x = x.toString();
    if (x.length<2) {
      numprevious = "0"
    } else {
      numprevious =""
    }
    return numprevious;
  }

  document.getElementById("time").innerHTML = zeroNeeded(hours) + hours + ":" + zeroNeeded(minutes) + minutes + ":" + zeroNeeded(seconds) + seconds + " " + ampm;
  document.getElementById("date").innerHTML = dayprint + ", " + monthprint +" "+ date + ordinal + " "+ year;

}

postTime()