import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const newUser = { id: 123, name: "jela" };
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser(newUser);
        }}
      >
        Login
      </button>
    </div>
  );
};
