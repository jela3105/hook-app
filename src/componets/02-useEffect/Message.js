import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("mount component");
    return () => {
      console.log("unmount component");
    };
  }, []);
  return (
    <div>
      <h3> You are genial </h3>
    </div>
  );
};
