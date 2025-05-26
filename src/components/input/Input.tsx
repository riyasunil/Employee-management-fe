import React from "react";
import "./Input.css";

type InputType = {
  name: string;
  id: string;
  type: string;
};

const Input = ({ name, id, type }: InputType) => {
  return (
    <div className="inputform">
      <label className="input__label">{name}</label>
      <input type={type} placeholder={name} id={id} />
    </div>
  );
};

export default Input;
