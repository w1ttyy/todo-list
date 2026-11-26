export function renderTodos(project, expandedTodoId, editingTodoId) {
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

    if (todo.id === editingTodoId) {
      const editForm = document.createElement("form");
      editForm.classList.add("todo-edit-form");

      const titleEdit = document.createElement("input");
      titleEdit.type = "text";
      titleEdit.name = "title";
      titleEdit.ariaLabel = "Task name";
      titleEdit.required = true;
      titleEdit.value = todo.title;

      const descriptionEdit = document.createElement("textarea");
      descriptionEdit.name = "description";
      descriptionEdit.ariaLabel = "Description";
      descriptionEdit.value = todo.description;

      const dueDateEdit = document.createElement("input");
      dueDateEdit.type = "date";
      dueDateEdit.name = "dueDate";
      dueDateEdit.ariaLabel = "Due date";
      dueDateEdit.value = todo.dueDate;

      const priorityEdit = document.createElement("select");
      priorityEdit.name = "priority";
      priorityEdit.ariaLabel = "Priority";

      const priorityOptions = ["low", "medium", "high"];
      priorityOptions.forEach((option) => {
        const priorityOption = document.createElement("option");
        priorityOption.value = option;
        priorityOption.textContent = option;
        if (option === todo.priority) {
          priorityOption.selected = true;
        }
        priorityEdit.append(priorityOption);
      });

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.type = "submit";

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.type = "button";
      cancelBtn.classList.add("todo-edit-cancel");

      editForm.append(
        titleEdit,
        descriptionEdit,
        dueDateEdit,
        priorityEdit,
        saveBtn,
        cancelBtn,
      );
      li.append(editForm);
    } else if (todo.id === expandedTodoId) {
      li.classList.add("expanded");

      const todoDetails = document.createElement("div");
      todoDetails.classList.add("todo-details");

      const todoDescription = document.createElement("p");
      todoDescription.textContent = todo.description;

      const todoPriority = document.createElement("p");
      todoPriority.textContent = "Priority: " + todo.priority;

      const todoEditBtn = document.createElement("button");
      todoEditBtn.textContent = "Edit";
      todoEditBtn.type = "button";
      todoEditBtn.classList.add("todo-edit");

      const todoDeleteBtn = document.createElement("button");
      todoDeleteBtn.textContent = "Delete";
      todoDeleteBtn.type = "button";
      todoDeleteBtn.classList.add("todo-delete");

      todoDetails.append(
        todoDescription,
        todoPriority,
        todoEditBtn,
        todoDeleteBtn,
      );

      li.append(todoDetails);
    }

    list.append(li);
  });
}
