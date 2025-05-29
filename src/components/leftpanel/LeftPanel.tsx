import LeftPanelImg from "../../assets/kv-login.jpeg"
import "./LeftPanel.css"
const LeftPanel = () => {
  return (
    <div className='leftpanel__container'>
        <div className="circular__mask">
            <img src={LeftPanelImg} alt="left panel" />
        </div>
    </div>
  )
}

export default LeftPanel