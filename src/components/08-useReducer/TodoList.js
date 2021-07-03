import React from "react";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <div className="col-7">
      <ul className="list=group list-group-flush">
        {todos.map((todo, i) => (
          <li key={todo.id} className="list-group-item">
            <p
              className={`${todo.done && "complete"}`}
              onClick={() => handleToggle(todo.id)}
            >
              {i + 1}. {todo.desc}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
