import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./TodoUi/CreateTodo";
import { addTodo } from "../redux/todoAction";

export default function Todo() {
  let [title, setTitle] = useState("");
  let todos = useSelector((state) => state.todos);
  let dispatch = useDispatch((dispatch) => dispatch);

  const createTodo = (event) => {
    event.preventDefault();
    if (title.length >= 4) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <section>
      <div className="todo-container flex-45">
        <h2 className="todo-container-heading">Todo App</h2>
        <div className="flex-row">
          <form onSubmit={createTodo} className="todo-input-container">
            <input
              type="text"
              className="userinput"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder=" What needs to be Done "
            />
            <button type="submit" className="todo-button">
              create todo
            </button>
          </form>
        </div>

        {/* // print all the incompleted todos  */}

        <ul>
          {todos.map((todo) => {
            return (
              todo.isDone !== true && (
                <CreateTodo
                  title={todo.title}
                  id={todo.id}
                  dispatch={dispatch}
                  key={todo.id}
                  isDone={todo.isDone}
                  setTitle={setTitle}
                />
              )
            );
          })}
        </ul>
      </div>
      {/* display all the completed todos  */}
      <div className="flex-45 todo-container">
      <h2 className="todo-container-heading">Completed Todos </h2>
      <ul>
          {todos.map((todo) => {
            return (
              todo.isDone === true && (
                <CreateTodo
                  title={todo.title}
                  id={todo.id}
                  dispatch={dispatch}
                  key={todo.id}
                  isDone={todo.isDone}
                  setTitle={setTitle}
                />
              )
            );
          })}
        </ul>
      </div>
    </section>
  );
}
