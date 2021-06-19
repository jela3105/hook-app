import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);
  const reset = (factor = initialState) => {
    setCounter(factor);
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return { counter, increment, decrement, reset };
};
