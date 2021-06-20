import React from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const handeClick = () => {
    document.querySelector("input").select();
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input type="text" className="form-control" placeholder="Name" />
      <button className="btn btn-outline-primary mt-5" onClick={handeClick}>
        Focus
      </button>
    </div>
  );
};
