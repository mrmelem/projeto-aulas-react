import React, { useRef, useState } from "react";
import api from "../../../services/api";

import { Form } from "@unform/web";
import { Scope } from "@unform/core";

import Input from "../../inputs/input";
import InputFile from "../../inputs/inputFile";
import InputMask from "../../inputs/inputMask";

import * as Yup from "yup";

const fields = {
  name: Yup.string().required(),
  document: Yup.string().required(),
  email: Yup.string().email().required(),
  birthdate: Yup.number().required(),
  image: Yup.string().required(),
  pass: Yup.string().required(),
  address: Yup.object().shape({
    city: Yup.string().required(),
    uf: Yup.string().required(),
    country: Yup.string().required(),
    zipcode: Yup.string().required(),
  }),
};

function Login() {
  const formRef = useRef(null);

  const [defaultAddress, setDefaultAddress] = useState(null);
  const [zipcodeAddress, setZipcodeAddress] = useState(null);

  const handleSubmit = async (data, { reset }) => {
    try {
      data.birthdate = new Date(data.birthdate).getTime();
      const schema = Yup.object().shape(fields);

      //await schema.validate(data, { abortEarly: false });

      const response = await api.post("/user", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" label="Seu nome" />
      <InputMask mask="999.999.999-99" name="document" label="CPF" />
      <Input name="email" label="Seu email" />
      <Input name="birthdate" type="date" label="Data de nascimento" />
      <InputFile
        name="image"
        type="file"
        accept="image/jpeg, image/png, image/gif"
        label="Foto de perfil"
      />
      <Input name="pass" type="password" label="Sua senha" />

      {!zipcodeAddress && (
        <Scope path="address">
          <Input name="city" label="Cidade" placeholder="123" />
          <Input name="uf" label="UF" />
          <Input name="country" label="País" />
        </Scope>
      )}

      {zipcodeAddress && (
        <Scope path="address" defaultValues={}>
          <Input name="city" label="Cidade" placeholder="123" />
          <Input name="uf" label="UF" />
          <Input name="country" label="País" />
        </Scope>
      )}
      
      <button type="submit">Finalizar</button>
    </Form>
  );
}

export default Login;
