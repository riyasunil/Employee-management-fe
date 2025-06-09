import type { ChangeEvent, CSSProperties } from "react";
import "./Input.css";

type InputType = {
  name: string;
  id: string;
  type: string;
  disabled ?: boolean;
  placeholder ?: string;
  styles ?: CSSProperties
  value ?: string | number,
    onChange : (event : ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, id, type, disabled , placeholder, styles, onChange ,value}: InputType) => {
  return (
    <div className="inputform">
      <label className="input__label">{name}</label>
      <input type={type} placeholder={placeholder} id={id}  disabled={disabled} style={styles} value={value?.toString()} onChange={onChange}/>
    </div>
  );
};

export default Input;
