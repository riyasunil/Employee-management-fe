import React, { type CSSProperties } from 'react'
import "./TitleButton.css"
type TitleButtonType = {
    iconPath  : string,
    label : string,
  onClick : (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TitleButton = ({iconPath, label, onClick} : TitleButtonType) => {
  return (
    <div className='titlebutton__wrapper'>
        <button className="icon__container" style={{
            border : 'none',
        }} onClick={onClick}>
            <img src={iconPath} alt="icon"/>
        </button>
        <div className='label__cton'>{label}</div>
    </div>
  )
}

export default TitleButton