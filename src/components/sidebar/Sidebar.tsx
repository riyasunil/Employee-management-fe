
import KVlogo from "../../assets/kv-logo.png"
import SidebarIcon from "../../assets/icon.svg"
import "./Sidebar.css"
import Tab from '../tab/Tab'
import { useNavigate } from "react-router-dom"


const Sidebar = ({title} : {title : string}) => {
  const navigator = useNavigate();
  const logout = () => {
    console.log("hi")
    localStorage.setItem("token", "")
    navigator("/login")
  }
  return (
    <div className='sidebar__container'>
        <img src={KVlogo} alt="" className="sidebar__logo" />
        <div className="tabs">
            <Tab title={title} icon={SidebarIcon}/>
            <Tab title="Logout" onClick={logout} icon="/logout.svg" />
        </div>
    </div>
  )
}

export default Sidebar