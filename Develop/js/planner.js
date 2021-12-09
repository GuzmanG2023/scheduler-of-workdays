var hour = moment().hour();
console.log(hour,"hour")

function colorHours () {
    var hour = moment().hour();
    // if (hour != 12) {hour = hour%12}
    hour = Math.abs(hour - 9);
    var descriptions = $(".description");
    for (let i = 0; i < 9; i++) {
        if (i == hour) {
            $(descriptions[i]).addClass("present");
        }
        else if (i > hour) {
            $(descriptions[i]).addClass("future");
        }
        else {
            $(descriptions[i]).addClass("past");
        }
    }
}

setInterval(colorHours, 60000);

colorHours();