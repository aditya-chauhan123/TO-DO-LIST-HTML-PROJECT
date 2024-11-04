
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


document.addEventListener('DOMContentLoaded', loadTasks);


addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = createTaskElement(taskText);
  taskList.appendChild(taskItem);
  saveTasks();
  taskInput.value = '';
}

function createTaskElement(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  li.addEventListener('click', toggleComplete);
  li.appendChild(deleteBtn);

  return li;
}

function toggleComplete(e) {
  e.target.classList.toggle('completed');
  saveTasks();
}

function deleteTask(e) {
  e.target.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach((task) => {
    tasks.push({
      text: task.firstChild.textContent,
      completed: task.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    const taskItem = createTaskElement(task.text);
    if (task.completed) taskItem.classList.add('completed');
    taskList.appendChild(taskItem);
  });
}



