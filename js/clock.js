function tickingClock() {

    const displayDayName = document.getElementById("dayName");
    const displayMonth = document.getElementById("month");
    const displayDay = document.getElementById("day");
    const displayYear = document.getElementById("year");
    const dispslayHour = document.getElementById("hour");
    const displayMinute = document.getElementById("minute");
    const displaySecond = document.getElementById("second");
    const displayAmPm = document.getElementById("AM_PM");

    const newDate = new Date();
    const month = newDate.getMonth()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocotober", "November", "December"];
    const newMonth = months[month];
    const dayName = newDate.getDay(); 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    const newDays = days[dayName];
    const date = addLetters(newDate.getDate());
    const hours = addZero(newDate.getHours());
    const minutes = addZero(newDate.getMinutes());
    const seconds = addZero(newDate.getSeconds());
    const ampm = addAM_PM(hours);
    const fullYear = newDate.getFullYear()
    const displayStandardHours =getStandardHours(`${hours} :`)
    
    
    displayDayName.textContent = `${newDays},`
    displayMonth.textContent = newMonth
    displayDay.textContent = date
    displayYear.textContent = fullYear

     
    dispslayHour.textContent = displayStandardHours
    displayMinute.textContent = `${minutes} :`
    displaySecond.textContent = seconds
    displayAmPm.textContent = ampm

}


function addZero(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

function addLetters(day) {
    if (day === 1 | day === 21 | day === 31) {
        return day +"st";
    } if (day === 2 | day === 22)  {
        return day +"nd";
    } if (day === 3 | day === 23) {
        return day +"rd";
    } else return day +"th"
}

function addAM_PM(clock) {
    if (clock <12) {
        return "AM";
    } else return "PM"
}

function getStandardHours(militaryHours) {
    if (militaryHours === 0) {
      return 12
    } else if (militaryHours > 12) {
      return militaryHours - 12
    } else {
      return militaryHours
    }
  }

function militaryTime() {

}
setInterval(tickingClock, 1000)

