import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);

  const Auth = () => {
    setLogin(!login);
  };

  const Text = "Situação";

  useEffect(() => {
    console.log("Autenticando");
  }, []);

  const User = {
    name: "Alessandro",
    idade: "18 anos",
    altura: "1,78",
  };

  return (
    <Context.Provider value={{ login, Auth, Text, User }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
