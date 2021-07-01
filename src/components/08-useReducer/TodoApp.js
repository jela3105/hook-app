import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

import "./styles.css";

const initialState = [
  { id: new Date().getTime(), desc: "Learn react", done: false },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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
        <div className="col-7">
          <ul className="list=group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
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
