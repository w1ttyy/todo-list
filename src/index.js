import "./styles.css";
import {
  init,
  getProjects,
  addProject,
  addTodo,
  removeTodo,
  toggleTodo,
  getProject,
} from "./logic/app.js";
import { renderProjects } from "./ui/sidebar.js";
import { renderTodos } from "./ui/todoList.js";

init();

let activeProjectId = getProjects()[0].id;
let expandedTodoId = null;
let editingTodoId = "d25baa6f-7349-4292-a52c-4d6f7655b6cf";
function render() {
  renderProjects(getProjects(), activeProjectId);
  renderTodos(getProject(activeProjectId), expandedTodoId, editingTodoId);
}

const projectList = document.querySelector("#project-list");

projectList.addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) return;

  activeProjectId = li.dataset.id;
  expandedTodoId = null;
  render();
});

const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (event) => {
  const card = event.target.closest(".todo-card");
  if (!card) return;

  const todoId = card.dataset.id;

  if (event.target.closest(".todo-check")) {
    toggleTodo(activeProjectId, todoId);
    render();
    return;
  }

  if (event.target.closest(".todo-delete")) {
    removeTodo(activeProjectId, todoId);
    expandedTodoId = null;
    render();
    return;
  }

  if (todoId === expandedTodoId) {
    expandedTodoId = null;
  } else {
    expandedTodoId = todoId;
  }

  render();
});

// PROJECT FORM ====================================================

const addProjectBtn = document.querySelector("#add-project-btn");
const projectForm = document.querySelector("#project-form");
const projectFormName = document.querySelector("#project-name");
const cancelProjectFormBtn = document.querySelector("#cancel-project-btn");

addProjectBtn.addEventListener("click", () => {
  projectForm.hidden = false;
  addProjectBtn.hidden = true;
  projectFormName.focus();
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = projectFormName.value.trim();
  if (!name) return;

  const project = addProject(name);
  activeProjectId = project.id;

  hideProjectForm();

  render();
});

function hideProjectForm() {
  projectForm.reset();
  projectForm.hidden = true;
  addProjectBtn.hidden = false;
}

cancelProjectFormBtn.addEventListener("click", hideProjectForm);

// TASK FORM ====================================================

const addTaskBtn = document.querySelector("#add-task-btn");
const taskForm = document.querySelector("#task-form");
const taskFormTitle = document.querySelector("#task-title");
const taskFormDescription = document.querySelector("#task-description");
const taskFormDueDate = document.querySelector("#task-due-date");
const taskFormPriority = document.querySelector("#task-priority");
const taskFormCancelBtn = document.querySelector("#cancel-task-btn");

function hideTaskForm() {
  taskForm.reset();
  taskForm.hidden = true;
  addTaskBtn.hidden = false;
}

addTaskBtn.addEventListener("click", () => {
  taskForm.hidden = false;
  addTaskBtn.hidden = true;
  taskFormTitle.focus();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = taskFormTitle.value.trim();
  if (!name) return;

  const description = taskFormDescription.value.trim();
  const dueDate = taskFormDueDate.value;
  const priority = taskFormPriority.value;

  addTodo(activeProjectId, name, description, dueDate, priority);

  hideTaskForm();

  render();
});

taskFormCancelBtn.addEventListener("click", hideTaskForm);

render();
