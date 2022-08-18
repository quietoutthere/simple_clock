function tickingClock() {

    var date = new Date();
        month = date.getMonth()
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocotober", "November", "December"];
        newMonth = months[month];
        dayName = date.getDay(); 
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
        newDays = days[dayName]
    
    document.getElementById("dayName").textContent = newDays
    document.getElementById("month").textContent = newMonth
    document.getElementById("day").textContent = addLetters(date.getDate())
    document.getElementById("year").textContent = date.getFullYear()

    let newHours = 
        document.getElementById("hour").textContent = addZero(date.getHours())
    document.getElementById("minute").textContent = addZero(date.getMinutes())
    document.getElementById("second").textContent = addZero(date.getSeconds())
    document.getElementById("AM_PM").textContent = addAM_PM(newHours)

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

setInterval(tickingClock, 10)

