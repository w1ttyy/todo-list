import "./styles.css";
import Todo from "./logic/todo.js";
import Project from "./logic/project.js";
import { init, addProject, getProjects } from "./logic/app.js";

init();

console.log(getProjects().length);
console.log(getProjects()[0].name);

init();
console.log(getProjects().length);

const work = addProject("Work");
console.log(getProjects().length);

work.addTodo(new Todo("todo1", "popis 1", "dnes", "high"));

console.log(work);
