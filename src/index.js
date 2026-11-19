import "./styles.css";
import Todo from "./logic/todo.js";
import Project from "./logic/project.js";
import { init, addProject, getProjects } from "./logic/app.js";
import { saveProjects, loadProjects } from "./logic/storage.js";

init();

console.log(getProjects().length);
console.log(getProjects()[0].name);

init();
console.log(getProjects().length);

const work = addProject("Work");
console.log(getProjects().length);

work.addTodo(new Todo("todo1", "popis 1", "dnes", "high"));

saveProjects(getProjects());

console.log(work);

const loaded = loadProjects();
console.log(loaded.length);
console.log(loaded[0].name);

loaded[1].todos[0].toggleComplete();
console.log(loaded[1].todos[0].completed); // čakáš true
console.log(loaded[1].id === work.id); // čakáš true
