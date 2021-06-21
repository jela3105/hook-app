import React, { useLayoutEffect, useRef } from "react";
import "./layout.css";
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
  const pTag = useRef();
  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="text-right">
        <p ref={pTag}> {quote} </p>
      </blockquote>
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
