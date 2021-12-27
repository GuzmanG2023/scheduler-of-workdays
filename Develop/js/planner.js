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