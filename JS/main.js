let taskInput = document.getElementById("taskInput");
let submit = document.getElementById("submit");
let todoContainer = document.querySelector(".todo-container");
let clearAll = document.querySelector(".clearAll");
let editingTask = null;

// Function to add event listeners to task buttons
function addEventListenersToTasks() {
  let done = document.querySelectorAll(".done");
  let deleteButtons = document.querySelectorAll(".delete");
  let updateButtons = document.querySelectorAll(".update");

  done.forEach((done) => {
    done.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.classList.toggle("active");
      console.log(e.target.parentElement);
      // localStorage.setItem("task", todoContainer.innerHTML)
    });
  });

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      localStorage.setItem("task", todoContainer.innerHTML);
    });
  });

  updateButtons.forEach((updateBtn) => {
    updateBtn.addEventListener("click", (e) => {
      taskInput.value = e.target.parentElement.parentElement
        .querySelector(".task")
        .querySelector("h1").innerHTML;
      editingTask = e.target.parentElement.parentElement;
    });
  });
}

// Load tasks from local storage
if (localStorage.getItem("task") !== null) {
  todoContainer.innerHTML = localStorage.getItem("task");
  addEventListenersToTasks(); // Reattach event listeners after loading tasks
}

// Add task
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
      let done = document.createElement("i");
      done.className = "fa-regular fa-circle done";
      task.append(done);
      let taskCont = document.createElement("h1");
      taskCont.innerHTML = taskInput.value;
      task.append(taskCont);
      // task.innerHTML = taskInput.value;
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

      // Attach event listeners to new buttons
      deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
        localStorage.setItem("task", todoContainer.innerHTML);
      });

      updateBtn.addEventListener("click", (e) => {
        taskInput.value =
          e.target.parentElement.parentElement.querySelector(".task").querySelector('h1').innerHTML;
        editingTask = e.target.parentElement.parentElement;
      });
      done.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle("active");
        console.log(e.target.parentElement);
        // localStorage.setItem("task", todoContainer.innerHTML)
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

// change mode 
let mood = document.querySelector(".mood");
if (mood) {
  mood.addEventListener("click", () => {
    mood.classList.toggle("fa-moon");
    document.querySelector(".container").classList.toggle("light");
  });
}

// transform menu
let transMenu = document.querySelector('.menu');
let closeMenu = document.querySelector('.closeMenu');

transMenu.addEventListener("click", ()=>{
  document.querySelector('.menuTab').classList.add('active');
  closeMenu.addEventListener("click", ()=>{
    document.querySelector('.menuTab').classList.remove('active');
  })
})