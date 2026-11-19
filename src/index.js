import "./styles.css";
import {
  init,
  getProjects,
  addProject,
  addTodo,
  removeTodo,
  toggleTodo,
} from "./logic/app.js";

init();

// const work = addProject("Work");
// addTodo(work.id, "Test todo", "popis", "2026-11-21", "high");

console.log("Počet projektov:", getProjects().length);
console.log(
  "Názvy:",
  getProjects().map((project) => project.name),
);

const testProject = addProject("Test");
const testTodo = addTodo(
  testProject.id,
  "Todo na test",
  "popis",
  "2026-11-21",
  "low",
);

toggleTodo(testProject.id, testTodo.id);
console.log("Completed po toggle:", testProject.getTodo(testTodo.id).completed); // true

removeTodo(testProject.id, testTodo.id);
console.log("Todos po remove:", testProject.todos.length); // 0
