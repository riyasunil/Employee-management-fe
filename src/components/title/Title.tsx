import type { ReactNode } from "react"
import "./Title.css"

type TitleBarType = {
  title : string,
  filterComponent ?: ReactNode,
  actionButtonComponent ?: ReactNode 
  
}
const Title = ({title, filterComponent, actionButtonComponent} : TitleBarType) => {
  // console.log(filterComponent)
  return (
        <div className="title_container">
          <p className="title">{title}</p>
          <div className="title_buttons">
              {filterComponent && (filterComponent)}
              {actionButtonComponent && (actionButtonComponent)}
          </div>
        </div>
  )
}

export default Title