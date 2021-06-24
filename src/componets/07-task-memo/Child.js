import React from "react";

export const Child = ({ numbers, increment }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(numbers)}>
      {numbers}
    </button>
  );
};
