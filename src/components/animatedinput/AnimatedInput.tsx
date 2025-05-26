import React from 'react'
import "./AnimatedInput.css"

type InputProps = {
    inputType: string,
    placeholder: string,
    id: string
}
const AnimatedInput = ({inputType, placeholder, id} : InputProps) => {
  return (
    <div className="input_wrapper">
        <input type={inputType}  id={id} placeholder={placeholder}/>
        <label htmlFor={id}>{placeholder}</label>
    </div>
    
  )
}

export default AnimatedInput