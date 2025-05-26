import React, { type CSSProperties, type ReactNode } from 'react'
import "./Button.css"

type ButtonProps = {
  style?: CSSProperties;
  children: ReactNode;
};

const Button = ({style, children} : ButtonProps) => {
  return (
    <button style={style} className='btn'> {children}</button>
  )
}

export default Button