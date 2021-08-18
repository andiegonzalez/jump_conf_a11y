import React from "react";

import pawprintIcon from "../assets/pawprint.svg";

const RadioInput = (props) => {
  const { name, label, data, onChange } = props;
  return (
    <fieldset>
      <legend>
        <img
          aria-hidden="true"
          width="20px"
          height="20px"
          src={pawprintIcon}
          alt={`${name} icon`}
          style={{ margin: "0 10px 0 0" }}
        />
        {label}
      </legend>
      {data.map((item) => (
        <div key={item.value}>
          <input
            type="radio"
            name={name}
            id={item.value}
            value={item.value}
            onChange={onChange}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioInput;
