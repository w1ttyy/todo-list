import Project from "./project.js";

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
  return project;
}

export function init() {
  if (projects.length === 0) {
    const inbox = new Project("Inbox");
    projects.push(inbox);
  }
}
