import React, { type CSSProperties } from 'react'
import "./Status.css"
type StatusType = {
    title : string,
    styles ?: CSSProperties
}

const Status = ({title, styles} : StatusType) => {
  return (
    <div className='status_wrapper' style={styles}>
        {title}
    </div>
  )
}

export default Status