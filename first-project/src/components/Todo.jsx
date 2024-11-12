import React, { useEffect, useState, useRef } from "react";
import "./CSS/Todo.css";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="to-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div onClick={add} className="todo-add-btn">
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.no}>{todo.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
