import { ADD_TODO, DELETE_TODO, COMPLETED_TODO } from "./todoTypes";

//initial state of our application
const initialState = {
  todos: [],
  completedTodos : [],
};

//Our reducer function
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      let newtodo = { id: randomIdGenerator(), title: payload, isDone: false };
      return { ...state, todos: state.todos.concat(newtodo) };

    case DELETE_TODO:
      let alltodos = state.todos.filter((todo) => todo.id !== payload);
      return { ...state, todos: alltodos };

    case COMPLETED_TODO:
      let updateTodo = state.todos.filter((todo) => {
        if (todo.id === payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      return { ...state, todos: updateTodo };
    default:
      return state;
  }
};

function randomIdGenerator(number = 10092) {
  return Math.floor(Math.random(number) * number);
}

console.log(randomIdGenerator());
