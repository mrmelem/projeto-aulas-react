import React from "react";

function Container() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
      <div>
        <a href="/registro">Cadastrar</a>
        <a href="/login">Entrar</a>
      </div>
    </header>
  );
}

export default Container;
