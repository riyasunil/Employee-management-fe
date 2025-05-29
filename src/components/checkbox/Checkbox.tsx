import type { CSSProperties, ReactNode } from "react";
import "./Checkbox.css"

type ButtonProps = {
  style?: CSSProperties;
//   children: ReactNode;
name : string,
  onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
  id : string
};

const Checkbox = ({style, name, id } : ButtonProps) => {
  return (
    <div className="checkbox__wrapper">
    <input type="checkbox" style={style} className="checkbox" name={name} id={id} />
    <label htmlFor={id}>{name}</label>
    </div>
  )
}

export default Checkbox