//global variables
let currentHour = moment().hour();
let tasks = {
    9: "9 AM task",
    10: "10aM task",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
}

// let loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
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

    //use styling instead of swaping the elements

    textInput.trigger("focus");

    $(".task-input").on("blur", "textarea", function() {
        let taskD = $("<div>")
            .addClass("col-10 border-bottom border-white task-input")
            .text(text)
    $(this).replaceWith(taskD)
    
    });

})



//save and retrieve from local storage