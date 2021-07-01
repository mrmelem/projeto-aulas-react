import React, { useState } from "react";

function App() {
  const [nome, setNome] = useState(0);

  const handleClickUp = () => {
    const value = nome + 1;
    setNome(value);
  };

  const handleClickDown = () => {
    const value = nome - 1;
    setNome(value);
  };

  return (
    <>
      {nome}
      <button onClick={handleClickUp}>Aumentar</button>
      <button onClick={handleClickDown}>Diminuir</button>
    </>
  );
}
export default App;
