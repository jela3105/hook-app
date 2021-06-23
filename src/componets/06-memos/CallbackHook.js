import React, { useState } from "react";
import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />
    </div>
  );
};
