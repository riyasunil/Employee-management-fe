import React from "react";

type ObjectType = {
    name: string,
    label : string
}
type SelectType = {
  name: string;
  id: string;
  options: Array<ObjectType>;
};

const Select = ({ name, id, options }: SelectType) => {
  return (
    <>
    <label className="input__label">{name}</label>
    <select name={name} id={id}>
    {options.length>0 && (options.map((op: ObjectType, index:number) => {
       return <option  key={index} value = {op.name}>{op.label}</option>
    })
)}
</select>
</>
)};

export default Select;
