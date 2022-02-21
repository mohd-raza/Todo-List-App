import React, { useState, useEffect, useRef } from "react";
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onsubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            name="text"
            value={input}
            placeholder="Update Item..."
            onChange={(e) => setInput(e.target.value)}
            className="todo-input edit"
            ref={focusRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="text"
            value={input}
            placeholder="Add a todo..."
            onChange={(e) => setInput(e.target.value)}
            className="todo-input"
            ref={focusRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
