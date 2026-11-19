import "./styles.css";
import Todo from "./logic/todo.js";
import Project from "./logic/project.js";

console.log("hello");

const project = new Project("Projecet 1");
console.log(project);

const todo = new Todo("Task 1", "toto je popis", "2026-11-21", "high");
todo.toggleComplete();
console.log(todo);

project.addTodo(todo);
project.removeTodo(todo.id);
