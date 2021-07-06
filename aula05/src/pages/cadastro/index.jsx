import React, { useRef } from "react";

import * as Yup from "yup";

import { Form } from "@unform/web";
import Input from "../../components/input";
import Select from "../../components/select";

import connection from "../../api";

const rolesOptions = [
  { label: "Professor", value: "teacher" },
  { label: "Estudante", value: "student" },
];

const requiredMsg = "Esse campo é obrigatório";

const Fields = {
  name: Yup.string().required(requiredMsg),
  role: Yup.string().required(requiredMsg),
  age: Yup.number().required(requiredMsg),
};

function Cadastro() {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    console.log(data);

    try {
      const schema = Yup.object().shape(Fields);

      await schema.validate(data, { abortEarly: false });

      const response = await connection.post("/users", data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Usuário" text="Nome de usuário" />
      <Select name="role" options={rolesOptions} />
      <Input name="age" placeholder="Idade" text="Sua idade" type="number" />
      <button type="submit">Cadastrar!</button>
    </Form>
  );
}

export default Cadastro;
