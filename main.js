// get elements
let taskInput = document.getElementById("taskInput");
let submit = document.getElementById("submit");
let todoContainer = document.querySelector(".todo-container");
let clearAll = document.querySelector(".clearAll");
let editingTask = null;

if (localStorage.getItem("task") !== null) {
  todoContainer.innerHTML = localStorage.getItem("task");
}

// add task
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (taskInput.value !== "") {
        if (editingTask) {
            // Update the existing task
            editingTask.querySelector(".task").innerHTML = taskInput.value;
            editingTask = null; // Reset the editing task
        } else {
            // Create HTML elements for new task
            let todoDiv = document.createElement("div");
            todoDiv.className = "todo";
            let task = document.createElement("div");
            task.className = "task";
            task.innerHTML = taskInput.value;
            let btns = document.createElement("div");
            btns.className = "btns";
            let deleteBtn = document.createElement("button");
            deleteBtn.className = "delete";
            deleteBtn.innerHTML = "Delete";
            let updateBtn = document.createElement("button");
            updateBtn.className = "update";
            updateBtn.innerHTML = "Update";

            // Append to HTML
            todoDiv.appendChild(task);
            todoDiv.appendChild(btns);
            btns.appendChild(deleteBtn);
            btns.appendChild(updateBtn);
            todoContainer.appendChild(todoDiv);

            // Delete the task
            deleteBtn.addEventListener("click", (e) => {
                e.target.parentElement.parentElement.remove();
                localStorage.setItem("task", todoContainer.innerHTML);
            });

            // Update the task
            updateBtn.addEventListener("click", (e) => {
                taskInput.value = e.target.parentElement.parentElement.querySelector(".task").innerHTML;
                editingTask = e.target.parentElement.parentElement;
            });
        }

        // Set in local storage
        localStorage.setItem("task", todoContainer.innerHTML);

        // Clear the input
        taskInput.value = "";
    }
});

// Clear all on click
clearAll.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

