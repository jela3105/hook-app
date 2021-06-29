import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styles.css";

const initialState = [
  { id: new Date().getTime(), desc: "Learn react", done: false },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Hello</li>
        <li>World</li>
        <li>Todo</li>
      </ul>
    </div>
  );
};
