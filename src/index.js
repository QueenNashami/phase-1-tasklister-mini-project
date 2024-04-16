document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value of the input field
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    // Create a new list item element
    const newTask = document.createElement("li");
    newTask.innerText = taskDescription;

    // Append the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  });
});
