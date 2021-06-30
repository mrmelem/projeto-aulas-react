import React from "react";

function components({ name, text, error, ...rest }) {
  console.log(text);
  return (
    <>
      {text && <label htmlFor={name}>{text}</label>}
      <input {...rest} name={name} id={name} />
      {error && <span className="error_form">{error}</span>}
    </>
  );
}

export default components;
