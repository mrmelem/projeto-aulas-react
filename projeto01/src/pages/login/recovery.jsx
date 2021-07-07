import React from "react";

import Container from "../../components/public/Container";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import Form from "../../components/forms/login/recovery";

function dashboard() {
  return (
    <Container>
      <Header />
      <Form />
      <Footer />
    </Container>
  );
}

export default dashboard;
