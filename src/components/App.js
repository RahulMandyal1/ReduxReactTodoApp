import React, { Component } from "react";
import { connect } from "react-redux";
import CreateTodo from "./TodoUi/CreateTodo";

class App extends Component {
  state = {
    title: "",
  };

  //change todo title
  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  //delete todo
  deleteTodo = ({ target }) => {
    let id = Number(target.id);
    this.props.dispatch({
      type: "deleteTodo",
      index: id,
    });

    this.setState({
      title: "",
    });
  };

  //create todo
  createTodo = () => {
    if(this.state.title!==""){
      this.props.dispatch({
        type: "addtodo",
        value: this.state.title,
      });
    }
    this.setState({
      title: "",
    });
  };

  //update todo once user completed a todo
  updateTodo = (id) => {
    this.props.dispatch({
      type: "isDone",
      index: id,
    });

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="todo-heading">Todo App</h1>
        <div className="flex-row">
          <input
            type="text"
            className="userinput"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder=" What needs to be Done "
          />
          <button onClick={this.createTodo} className="userclick">create todo</button>
        </div>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <CreateTodo
                title={todo.title}
                index={index}
                deleteTodo={this.deleteTodo}
                key={index}
                isDone={todo.isDone}
                updateTodo={this.updateTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

function getState(state) {
  return {
    todos: state.todos,
  };
}
export default connect(getState)(App);
