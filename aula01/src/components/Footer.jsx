import React from "react";

function components({ ...rest }) {
  return (
    <div {...rest}>
      <h1>Rodapé</h1>
    </div>
  );
}

export default components;
