import React, { useRef } from "react";

import { Form } from "@unform/web";

import Input from "../../inputs/input";

import * as Yup from "yup";

const fields = {
  email: Yup.string().required(),
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
      <Input name="user" label="Email" />

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default Login;
