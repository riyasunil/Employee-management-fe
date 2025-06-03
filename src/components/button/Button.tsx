import { type CSSProperties, type ReactEventHandler, type ReactNode } from 'react'
import "./Button.css"

type ButtonProps = {
  style?: CSSProperties;
  children: ReactNode;
  disabled?: boolean;
  onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({style, children, disabled, onClick} : ButtonProps) => {
  return (
    <button type='button' style={style} className='btn' onClick={onClick} disabled={disabled}> {children}</button>
  )
}

export default Button