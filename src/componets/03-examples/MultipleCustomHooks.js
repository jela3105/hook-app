import React from "react";
import "../02-useEffect/effects.css";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/1`
  );
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
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary">Next quote</button>
    </div>
  );
};
