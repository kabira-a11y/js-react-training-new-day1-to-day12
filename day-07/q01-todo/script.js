
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const completedCount = document.querySelector("#completed-count");
const formMessage = document.querySelector("#form-message");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = document.querySelectorAll(".filter-button");

let tasks = [];
let currentFilter = "all";
let nextId = 1;


taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = taskInput.value.trim();

  
  if (text === "") {
    formMessage.textContent = "Please enter a task first.";
    taskInput.focus();
    return;
  }

  tasks.push({
    id: nextId++,
    text: text,
    completed: false
  });

  taskInput.value = "";
  formMessage.textContent = "";

  renderTasks();
  taskInput.focus();
});


taskList.addEventListener("click", function (event) {
  const deleteButton = event.target.closest("[data-action='delete']");

  if (deleteButton && taskList.contains(deleteButton)) {
    const taskItem = deleteButton.closest(".task-item");
    const taskId = Number(taskItem.dataset.id);

    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });

    renderTasks();
    return;
  }

  const taskItem = event.target.closest(".task-item");

  if (!taskItem || !taskList.contains(taskItem)) {
    return;
  }

  const taskId = Number(taskItem.dataset.id);

  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });

  renderTasks();
});


filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;

    filterButtons.forEach(function (filterButton) {
      filterButton.classList.toggle(
        "active",
        filterButton === button
      );
    });

    renderTasks();
  });
});


function renderTasks() {
  taskList.replaceChildren();

  const visibleTasks = tasks.filter(function (task) {
    if (currentFilter === "active") {
      return !task.completed;
    }

    if (currentFilter === "completed") {
      return task.completed;
    }

    return true;
  });

  visibleTasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task-item";

    if (task.completed) {
      li.classList.add("completed");
    }

    li.dataset.id = task.id;

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute(
      "aria-label",
      "Delete task: " + task.text
    );

    li.append(taskText, deleteButton);
    taskList.append(li);
  });

  const remainingTasks = tasks.filter(function (task) {
    return !task.completed;
  }).length;

  const completedTasks = tasks.filter(function (task) {
    return task.completed;
  }).length;

  taskCount.textContent =
    remainingTasks + (remainingTasks === 1 ? " task left" : " tasks left");

  completedCount.textContent =
    completedTasks + " completed";

  emptyMessage.hidden = visibleTasks.length > 0;

  if (tasks.length === 0) {
    emptyMessage.textContent = "No tasks here yet. Add your first task!";
  } else if (visibleTasks.length === 0) {
    emptyMessage.textContent = "No tasks match this filter.";
  }
}


renderTasks();
