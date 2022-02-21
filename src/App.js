import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function app() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default app;
