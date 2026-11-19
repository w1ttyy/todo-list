import Project from "./project.js";
import Todo from "./todo.js";

const STORAGE_KEY = "projects";

export function saveProjects(projects) {
  const json = JSON.stringify(projects);
  localStorage.setItem(STORAGE_KEY, json);
}

export function loadProjects() {
  const json = localStorage.getItem(STORAGE_KEY);

  if (json === null) {
    return [];
  }

  const data = JSON.parse(json);

  return data.map((projectData) => {
    const project = Object.assign(new Project(), projectData);
    project.todos = projectData.todos.map((todoData) =>
      Object.assign(new Todo(), todoData),
    );
    return project;
  });
}
