import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
