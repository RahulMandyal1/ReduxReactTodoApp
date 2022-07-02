import { createStore } from "redux";
import { reducer } from "./todoReducer";

// store  the items in the localstorage
const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

//get all the data from  the localstorage
const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

let store = createStore(reducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
