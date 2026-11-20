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

init();

let activeProjectId = getProjects()[0].id;

renderProjects(getProjects(), activeProjectId);
