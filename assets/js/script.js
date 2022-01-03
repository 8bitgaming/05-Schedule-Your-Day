//global variables
let currentHour = moment().hour();
let tasks = [
    
]

// let loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (tasks.length === 0) {[
//       task = {
//         id: "",
//         text: "",
//     }];
//     }
  
//     console.log(tasks)
    // loop over object properties
//     $.each(tasks, function(list, arr) {
//       // then loop over sub-array
//       arr.forEach(function(task) {
//         createTask(task.text, task.date, list);
//       });
//     });
//   };
  
//   var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };
  

//Update background color in table against current time
for (i=9; i < 18; i++) {
    let hourBlock = $("#" + i)
    if (i < currentHour) {
        hourBlock.addClass("bg-secondary")
    } else if ( i > currentHour) {
        hourBlock.addClass("bg-primary")
    } else if (i = currentHour) {
        hourBlock.addClass("bg-success")
    }
}

//allow text entry in table

$(".task-input").on("click", function() {
    var text = $(this)
      .text()
      .trim();

    var textInput = $("<textarea>").addClass("col-10").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
})

$(".task-input").on("blur", "textarea", function() {
    let taskD = $("<div>")
        .addClass("col-10 border-bottom border-white task-input")
        .text(text)
$(this).replaceWith(taskD)

});

//save and retrieve from local storage