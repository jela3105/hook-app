const initialState = [
  {
    id: 1,
    todo: "Buy bread",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "create") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Buy milk",
  done: false,
};

const createTodoAction = {
  type: "create",
  payload: newTodo,
};

todos = todoReducer(todos, createTodoAction);

console.log(todos);
