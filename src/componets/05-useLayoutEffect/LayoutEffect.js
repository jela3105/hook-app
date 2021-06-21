import React from "react";
import "../02-useEffect/effects.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const LayoutEffect = () => {
  const { counter, increment, reset } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  if (counter > 30 && counter < 63) {
    reset(63);
  } else if (counter > 102) {
    reset(1);
  }
  const { quote } = !!data && data[0];

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="text-right">
        <p> {quote} </p>
      </blockquote>
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
