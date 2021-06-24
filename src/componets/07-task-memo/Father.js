import React from "react";
import { Child } from "./Child";
import { useState } from "react";
import "../02-useEffect/effects.css";

export const Father = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = (num) => {
    setValue(value + num);
  };

  return (
    <div>
      <h1>Father</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Child key={n} numbers={n} increment={increment} />
      ))}
      {/* <Child /> */}
    </div>
  );
};
