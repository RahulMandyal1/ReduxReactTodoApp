import React from "react";
import { deleteTodo, udpateTodo } from "../../redux/todoAction";
import { RiCloseCircleLine } from "react-icons/ri";
function CreateTodo(props) {
  let { title, isDone, id, dispatch } = props;
  return (
    <li className="todo-row">
      <input
        type="checkbox"
        checked={isDone}
        id={id}
        onChange={({ target }) => {
          dispatch(udpateTodo(target.id));
        }}
      />
      <p id={isDone && "completed"}> {title}</p>
      <RiCloseCircleLine
        className="delete-icon"
        id={id}
        onClick={({ target }) => {
          dispatch(deleteTodo(target.id));
        }}
      />
    </li>
  );
}

export default CreateTodo;
