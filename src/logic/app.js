import Project from "./project.js";
import Todo from "./todo.js";
import { saveProjects, loadProjects } from "./storage.js";

const projects = [];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((project) => project.id === id);
}

export function addProject(name) {
  const project = new Project(name);
  projects.push(project);
  save();
  return project;
}

export function init() {
  projects.push(...loadProjects());

  if (projects.length === 0) {
    addProject("Inbox");
  }
}

function save() {
  saveProjects(projects);
}

export function addTodo(projectId, title, description, dueDate, priority) {
  const project = getProject(projectId);
  const todo = new Todo(title, description, dueDate, priority);
  project.addTodo(todo);
  save();
  return todo;
}

export function removeTodo(projectId, todoId) {
  const project = getProject(projectId);
  project.removeTodo(todoId);
  save();
}

export function toggleTodo(projectId, todoId) {
  const project = getProject(projectId);
  project.getTodo(todoId).toggleComplete();
  save();
}

export function updateTodo(
  projectId,
  todoId,
  title,
  description,
  dueDate,
  priority,
) {
  const project = getProject(projectId);
  const todo = project.getTodo(todoId);
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  save();
}
