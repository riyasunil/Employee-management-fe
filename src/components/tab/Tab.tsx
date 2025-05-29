import "./Tab.css"

type TabProps = {
    icon : string,
    title : string
}
const Tab = ({icon, title} : TabProps) => {
  return (
    <div className="tab">
            <div className="icon__container">
              <img src={icon} alt="" className="tab__icon" />
            </div>
            <p>{title}</p>
          </div>
  )
}

export default Tab