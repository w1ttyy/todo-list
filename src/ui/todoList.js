export function renderTodos(project, expandedTodoId) {
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
    info.classList.add("todo-info");
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

    if (todo.id === expandedTodoId) {
      li.classList.add("expanded");

      const todoDetails = document.createElement("div");
      todoDetails.classList.add("todo-details");

      const todoDescription = document.createElement("p");
      todoDescription.textContent = todo.description;

      const todoPriority = document.createElement("p");
      todoPriority.textContent = "Priority: " + todo.priority;

      const todoDeleteBtn = document.createElement("button");
      todoDeleteBtn.textContent = "Delete";
      todoDeleteBtn.type = "button";
      todoDeleteBtn.classList.add("todo-delete");

      todoDetails.append(todoDescription, todoPriority, todoDeleteBtn);

      li.append(todoDetails);
    }

    list.append(li);
  });
}
