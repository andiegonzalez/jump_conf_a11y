import React, { useState } from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";

const Form = (props) => {
  const { onSubmit } = props;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    age: "",
    pets: "",
  });

  const handleOnChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <form onSubmit={(event) => onSubmit(event, formState)} className="form">
      <h2 className="form-title">Regístrate</h2>
      <p className="form-description">
        Llena tus datos en la siguiente forma...
      </p>
      <Input
        type="text"
        label="Nombre"
        name="name"
        value={formState.name}
        onChange={handleOnChange}
      />
      <Input
        type="text"
        label="Correo electrónico"
        name="email"
        value={formState.email}
        onChange={handleOnChange}
      />
      <Input
        type="number"
        label="Edad"
        name="age"
        value={formState.age}
        onChange={handleOnChange}
      />
      <RadioInput
        onChange={handleOnChange}
        label="Mascota"
        name="pet"
        data={[
          { label: "Gato", value: "cat" },
          { label: "Perro", value: "dog" },
          { label: "Pez", value: "fish" },
        ]}
      />
      <button className="submit" type="submit">
        Registrar
      </button>
    </form>
  );
};

export default Form;
