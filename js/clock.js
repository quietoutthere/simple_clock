var date = new Date();
    month = date.getMonth()
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocotober", "November", "December"];
    newMonth = months[month]


//pulling date from var date to html sheet 
const displayMonth = document.getElementById("month")
    displayMonth.textContent = newMonth
displayDay = document.getElementById("day").textContent = date.getDay()
document.getElementById("year").textContent = date.getFullYear()

//pulling time from var date to html sheet
document.getElementById("hour").textContent = date.getHours()
document.getElementById("minute").textContent = date.getMinutes()
document.getElementById("second").textContent = date.getSeconds()

function addZero(time) {
    if (time <10) {
        return 0 + time;
    }
        else return time;
    }
    


