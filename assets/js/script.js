//global variables
// let taskInputEl = document.getElementById('.task-input');
let currentHour = moment().hour();
let tasks = {}

//save any updated task to local storage
let saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return;
};
  
//Check if tasks exists as local storage object, if not create, then set background color and load data
let loadTasks = function() {
    if (!localStorage.getItem("tasks")) {
        tasks = {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
        } 
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
            tasks = JSON.parse(localStorage.getItem("tasks")); 
        }

    for (i=9; i < 18; i++) {
        let hourBlock = $("#" + i)
        if (i < currentHour) {
            hourBlock.addClass("bg-secondary")
        } else if ( i > currentHour) {
            hourBlock.addClass("bg-primary")
        } else if (i = currentHour) {
            hourBlock.addClass("bg-success")
        }
        hourBlock.text(tasks[i])
    }
}


//allow text entry in table

$(".task-input").on("click", function() {
       
    var text = $.trim($("#9").val());
    //   .text()
    //   .trim();

      console.log(text)

      //event.target - check this out

    //get ID and update object with text

 

})
loadTasks()
