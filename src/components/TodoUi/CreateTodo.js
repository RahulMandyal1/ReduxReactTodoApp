import React from "react";
import { deleteTodo, udpateTodo } from "../../redux/todoAction";
function CreateTodo(props) {
  let { title, isDone, id, dispatch, setTitle } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        id={id}
        onChange={({ target }) => {
          dispatch(udpateTodo(target.id));
        }}
      />
      <p id={isDone && "completed"}> {title}</p>
      <span
        className="close-btn"
        id={id}
        onClick={({ target }) => {
          dispatch(deleteTodo(target.id));
        }}
      >
        delete
      </span>
    </li>
  );
}

export default CreateTodo;
