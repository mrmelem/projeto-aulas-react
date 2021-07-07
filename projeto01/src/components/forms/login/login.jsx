import React, { useRef } from "react";

import { Form } from "@unform/web";

import Input from "../../inputs/input";

import * as Yup from "yup";

const fields = {
  user: Yup.string().required(),
  key: Yup.string().required("Campo obrigatório"),
};

function Login() {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape(fields);

      await schema.validate(data, { abortEarly: false });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="user" label="Nome de usuário" />

      <Input name="key" label="Senha" type="password" />

      <button type="submit">Entrar</button>

      <small>
        Esqueceu sua senha? <a href="/recuperar-acesso">Clique aqui</a> ou
        <a href="/register">Registre-se.</a>
      </small>
    </Form>
  );
}

export default Login;