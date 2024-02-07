let listontainer = document.querySelector(".list-container");
let taskInput = document.querySelector(".task-input");
let addTaskBtn = document.querySelector(".add-btn");

let addTask = () => {
  if (taskInput.value === "") {
    alert("please add your task");
  } else {
    listontainer.innerHTML += `<li class="list-item">
                                <div class="item">
                                    <i class="fa-regular fa-circle" id="checkTask" onclick="completeTask(this)"></i><span class="task-name">${taskInput.value}</span>
                                </div>
                                <div class="delete-item" onclick="removeTask(this)">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </div>
                            </li>`;
  }
  taskInput.value = "";
  saveTask();
};

let completeTask = (item) => {
  let listItem = item.parentNode;
  let taskName = listItem.querySelector(".task-name");
  taskName.classList.add("active");
  item.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
};

let removeTask = (task) => {
  let listItem = task.parentNode;
  listItem.remove();
  saveTask();
};

function saveTask() {
  localStorage.setItem("data", listontainer.innerHTML);
}

let showTask = () => {
  listontainer.innerHTML = localStorage.getItem("data");
};

showTask();

addTaskBtn.addEventListener("click", addTask);
