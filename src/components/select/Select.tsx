import { useMemo, useState, type CSSProperties } from "react";
import { useSearchParams } from "react-router-dom";
import "./Select.css"
type ObjectType = {
    name: string,
    label : string
}

type EmployeeType = {
    name: string,
    empId: string,
    joiningDate: string,
    role: string,
    status: string,
    exp: string
}


type SelectType = {
  name: string;
  id: string;
  options: Array<ObjectType>;
  // employees ?: Array<EmployeeType>;
  filterFunction ?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  statusFilter ?: string
  styles ?: CSSProperties
};

const Select = ({ name, id, options , filterFunction, statusFilter = "ALL", styles}: SelectType) => {
  return (
    <>
    <label className="input__label" >{name}</label>
    <select id={id} value={statusFilter} onChange={filterFunction} style={styles}>
    {options.length>0 && (options.map((op: ObjectType, index:number) => {
       return <option  key={index} value = {op.name} >{op.label}</option>
    })
)}
</select>
</>
)};

export default Select;
