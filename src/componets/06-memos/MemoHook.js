import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);
  const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
      console.log("here we go...");
    }
    return `Finish ${iterations} iterations.`;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Memorize: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
