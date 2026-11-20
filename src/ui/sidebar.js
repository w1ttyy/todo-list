export function renderProjects(projects, activeProjectId) {
  const projectList = document.querySelector("#project-list");

  projectList.replaceChildren();

  projects.forEach((project) => {
    const li = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = project.name;

    const count = document.createElement("span");
    count.textContent = project.todos.length;

    li.dataset.id = project.id;

    if (project.id === activeProjectId) {
      li.classList.add("active");
    }

    li.append(name, count);
    projectList.append(li);
  });
}
