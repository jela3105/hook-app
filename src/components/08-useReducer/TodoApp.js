import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
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
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
