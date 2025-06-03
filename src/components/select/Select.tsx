import { type CSSProperties } from "react";

import "./Select.css";
type ObjectType = {
  name: string | number;
  label: string;
};

type SelectType = {
  name: string | number;
  id: string;
  options: Array<ObjectType>;
  // employees ?: Array<EmployeeType>;
  styles?: CSSProperties;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  name,
  id,
  options,
  styles = {},
  value,
  onChange,
}: SelectType) => {
  return (
    <>
      <label className="input__label" htmlFor={id}>
        {name}
      </label>
      <select id={id} style={styles} value={value} onChange={onChange}>
        <option value="" disabled hidden>
          Select Role
        </option>
        {options.map((op: ObjectType, index: number) => {
          return (
            <option key={index} value={op.name}>
              {op.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
