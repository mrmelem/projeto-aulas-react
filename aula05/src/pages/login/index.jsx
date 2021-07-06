import React, { useState } from "react";

import connection from "../../api";
import { useHistory } from "react-router-dom";

function Login() {
  const initialData = {
    username: "",
    key: "",
  };

  const history = useHistory();

  const [values, setValues] = useState(initialData);
  const [error, setError] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const response = await connection.post("/login", values);

      console.log(response.data.token);

      connection.defaults.headers.authorization =
        "Bearer " + response.data.token;

      localStorage.setItem("access_token", response.data.token);
      return history.push("/admin");
    } catch (error) {
      setValues(initialData);
      return setError("login inválido");
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {error}
        <input name="username" value={values.username} onChange={onChange} />
        <input name="key" value={values.key} onChange={onChange} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
