import React from "react";
import "../02-useEffect/effects.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment, reset } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  if (counter > 30 && counter < 63) {
    reset(63);
  } else if (counter > 102) {
    reset(1);
  }
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {!loading && (
        <blockquote className="text-right">
          <p> {quote} </p>
          <footer className="blockquote-footer">
            {author + " " + counter}
          </footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
