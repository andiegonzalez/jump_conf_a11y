import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import jump_logo from "./assets/jump_logo.webp";

const App = () => {
  const [state, setState] = useState({ formSubmitted: false, formData: {} });
  const onSubmit = (event, data) => {
    event.preventDefault();
    if (data.name) {
      setState((prevState) => ({
        ...prevState,
        formSubmitted: true,
        formData: { ...data },
      }));
    }
  };

  return (
    <main>
      <img src={jump_logo} alt="Jump Conference Logo" />
      <header>
        <h1>Aprendiendo de Accesibilidad con React</h1>
        <p className="tagline">JumpConf 2021</p>
      </header>
      {state.formSubmitted && (
        <div aria-live="assertive" className="form-feedback">
          <p>Registro Exitoso!</p>
          <p>Gracias {state.formData.name}, te vemos pronto!</p>
        </div>
      )}
      <Form onSubmit={onSubmit} />
    </main>
  );
};

export default App;
