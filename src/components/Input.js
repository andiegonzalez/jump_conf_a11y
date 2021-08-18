import React from "react";

import calendarIcon from "../assets/calendar-page-empty.svg";
import envelopeIcon from "../assets/envelope.svg";
import userIcon from "../assets/user-shape.svg";

const icons = {
  age: calendarIcon,
  email: envelopeIcon,
  name: userIcon,
};

const Input = (props) => {
  const { label, type, name, onChange } = props;
  return (
    <div>
      <img
        aria-hidden="true"
        width="20px"
        height="20px"
        src={icons[name]}
        alt={`${name} icon`}
        style={{ margin: "0 10px 0 0" }}
      />
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} onChange={onChange} />
    </div>
  );
};

export default Input;
