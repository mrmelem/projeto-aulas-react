import React, { useContext } from "react";
import { Context } from "./Context";

function Label() {
  const { User } = useContext(Context);
  return (
    <>
      <h1>{User.name}</h1>
      <h3>{User.idade}</h3>
      <h3>{User.altura}</h3>
    </>
  );
}

export default Label;
