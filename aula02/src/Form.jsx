import React, { useContext } from "react";
import { Context } from "./Context";
import Label from "./Label";

function Form() {
  const { login, Auth } = useContext(Context);

  return (
    <>
      {login && (
        <>
          <Label />
          <button onClick={Auth}>Sair</button>
        </>
      )}

      {!login && (
        <>
          <Label />
          <button onClick={Auth}>Entrar</button>
        </>
      )}
    </>
  );
}

export default Form;
