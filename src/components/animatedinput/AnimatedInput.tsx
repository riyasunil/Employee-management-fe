
import { type ChangeEvent } from "react"
import "./AnimatedInput.css"

type InputProps = {
    inputType: string,
    placeholder: string,
    id: string,
    value : string
    onChange : (event : ChangeEvent<HTMLInputElement>) => void;
    inputRef ?: React.RefObject<HTMLInputElement | null> ;
    endAdornment ?: React.ReactNode
}
const AnimatedInput = ({inputType, placeholder, id, value, onChange, inputRef, endAdornment} : InputProps) => {
  return (
    <div className="input_wrapper">
        <input type={inputType}  id={id} placeholder={placeholder} value={value} onChange={onChange} ref={inputRef}/> 
        {/* whithout the onChange prop here the event is not binded to the input => meaning whatever is typed in the input will not inputReflect in the state in the parent components usestate. */}
        <label htmlFor={id}>{placeholder}</label>
         {endAdornment && (<div className="input__right__icon">{endAdornment}</div>)}

    </div>
    
  )
}

export default AnimatedInput