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

function render() {
  renderProjects(getProjects(), activeProjectId);
  renderTodos(getProject(activeProjectId));
}

const projectList = document.querySelector("#project-list");

projectList.addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) return;

  activeProjectId = li.dataset.id;
  render();
});

const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (event) => {
  const check = event.target.closest(".todo-check");
  if (!check) return;

  const card = check.closest(".todo-card");
  toggleTodo(activeProjectId, card.dataset.id);
  render();
});

render();
