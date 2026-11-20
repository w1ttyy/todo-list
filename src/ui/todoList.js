export function renderTodos(project) {
  const title = document.querySelector("#project-title");
  title.textContent = project.name;

  const list = document.querySelector("#todo-list");

  list.replaceChildren();

  project.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-card");
    li.dataset.id = todo.id;

    const check = document.createElement("button");
    check.classList.add("todo-check");
    check.type = "button";
    check.setAttribute("aria-label", "Toggle complete");

    const info = document.createElement("div");
    const todoTitle = document.createElement("span");
    todoTitle.textContent = todo.title;
    const date = document.createElement("span");
    date.textContent = todo.dueDate;
    info.append(todoTitle, date);

    li.classList.add(`priority-${todo.priority}`);
    if (todo.completed) {
      li.classList.add("completed");
    }

    li.append(check, info);
    list.append(li);
  });
}
