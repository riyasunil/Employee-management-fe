import React from 'react'
import "./Title.css"
const Title = ({title} : {title : string}) => {
  return (
        <div className="title_container">{title}</div>
  )
}

export default Title