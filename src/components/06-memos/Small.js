import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Change component");
  return <small>{value}</small>;
});
