import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { useForm } from "../../hooks/useForm";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: "remove",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({ type: "toggle", payload: todoId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
        <div className="col-5">
          <h4>Add todo</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleInputChange}
              value={description}
              placeholder="Learn..."
            />
            <button className="btn btn-outline-primary mt-1">Add</button>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};
