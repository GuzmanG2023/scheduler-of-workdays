var hour = moment().hour();
console.log(hour,"hour")

var btn = document.querySelector("button");


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

var updateData = function(){
    $("#9am").val(localStorage.getItem("9am"))
    $("#10am").val(localStorage.getItem("10am"))
    $("#11am").val(localStorage.getItem("11am"))
    $("#12pm").val(localStorage.getItem("12pm"))
    $("#1pm").val(localStorage.getItem("1pm"))
    $("#2pm").val(localStorage.getItem("2pm"))
    $("#3pm").val(localStorage.getItem("3pm"))
    $("#4pm").val(localStorage.getItem("4pm"))
    $("#5pm").val(localStorage.getItem("5pm"))
}

var saveTasks = function() {
    var tasks = $(this).siblings(".description").val()
    var hours = $(this).siblings(".hour").text()
    console.log(hours, tasks)

    localStorage.setItem(hours, tasks)
    updateData()
}

$(".saveBtn").click(saveTasks)



setInterval(colorHours, 60000);

colorHours();

updateData();