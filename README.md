# Todo List

A Todoist-inspired todo app built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-todo-list) JavaScript course.

**Live demo:** [w1ttyy.github.io/todo-list](https://w1ttyy.github.io/todo-list/)

## Features

- Organize todos into projects, with a default **Inbox**
- Add todos with a title, description, due date and priority
- Expand a todo to see its details, edit it or delete it
- Mark todos as complete
- Color-coded priorities (low, medium, high)
- Data is saved in `localStorage` and survives page refreshes

## Built with

- Vanilla JavaScript (ES modules, classes)
- HTML and CSS (Grid, Flexbox, custom properties)
- [webpack](https://webpack.js.org/) for bundling
- [date-fns](https://date-fns.org/) for date formatting

## Project structure

```
src/
├── logic/      # app state and data (no DOM code)
│   ├── app.js
│   ├── project.js
│   ├── todo.js
│   └── storage.js
├── ui/         # rendering only
│   ├── sidebar.js
│   └── todoList.js
├── index.js    # event handling, connects logic and UI
├── template.html
└── styles.css
```

## Run locally

```bash
git clone https://github.com/w1ttyy/todo-list.git
cd todo-list
npm install
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080).

To create a production build in `dist/`:

```bash
npm run build
```
