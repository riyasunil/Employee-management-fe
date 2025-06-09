import React, { act, type ReactNode } from 'react'
import "./PopUpModal.css"

type PopUpModalType = {
    iconPath : string,
    title : string,
    description : string, 
    actionButtons ?: ReactNode
}

const PopUpModal = ({iconPath, title, description, actionButtons} : PopUpModalType) => {
  return (
    <>
    <div className='popupmodal__overlay'></div>
    <div className='popupmodal__wrapper'>
        
        <div className="closbutton">
            <img src={iconPath} alt="icon" />
        </div>
        <p className="popup_title">
            {title}
        </p>
        <p className="popup_description">
            {description}
        </p>
        {actionButtons && (actionButtons)}
    </div>
    </>
  )
}

export default PopUpModal