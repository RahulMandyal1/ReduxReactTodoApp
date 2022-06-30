import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./TodoUi/CreateTodo";
import { addTodo } from "../redux/todoAction";

export default function App() {
  let [title, setTitle] = useState("");
  let todos = useSelector((state) => state.todos);
  let dispatch = useDispatch((dispatch) => dispatch);

  const createTodo = () => {
    if (title.length >= 4) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo App</h1>
      <div className="flex-row todo-input-container">
        <input
          type="text"
          className="userinput"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder=" What needs to be Done "
        />
        <button onClick={() => createTodo()} className="userclick">
          create todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <CreateTodo
              title={todo.title}
              id={todo.id}
              dispatch={dispatch}
              key={todo.id}
              isDone={todo.isDone}
              setTitle={setTitle}
            />
          );
        })}
      </ul>
    </div>
  );
}
