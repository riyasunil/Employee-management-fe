import { type CSSProperties, type ReactEventHandler, type ReactNode } from 'react'
import "./Button.css"

type ButtonProps = {
  style?: CSSProperties;
  children: ReactNode;
  onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({style, children, onClick} : ButtonProps) => {
  return (
    <button style={style} className='btn' onClick={onClick}> {children}</button>
  )
}

export default Button