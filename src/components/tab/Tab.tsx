import "./Tab.css"

type TabProps = {
    icon ?: string,
    title : string,
  onClick ?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Tab = ({icon, title, onClick} : TabProps) => {
  return (
    <div className="tab" onClick={onClick}>
            <div className="tab__icon__container">
              <img src={icon} alt="" className="tab__icon" />
            </div>
            <p>{title}</p>
          </div>
  )
}

export default Tab