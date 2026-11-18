import "./styles.css";
import Todo from "./logic/todo.js";

console.log("hello");

const todo = new Todo("Task 1", "toto je popis", "2026-11-21", "high");
todo.toggleComplete();
console.log(todo);
