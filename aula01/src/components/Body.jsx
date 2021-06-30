import React from "react";

import Input from "./Input";

function components({ ...rest }) {
  return (
    <div {...rest}>
      <h1>Corpo do meu projeto</h1>
      <Input
        className="input-control"
        type="text"
        name="input"
        placeholder="Teste"
        text="Mota é gay"
        error="Campo inválido"
      />
    </div>
  );
}

export default components;
