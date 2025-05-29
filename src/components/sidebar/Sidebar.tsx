
import KVlogo from "../../assets/kv-logo.png"
import SidebarIcon from "../../assets/icon.svg"
import "./Sidebar.css"
import Tab from '../tab/Tab'


const Sidebar = ({title} : {title : string}) => {
  return (
    <div className='sidebar__container'>
        <img src={KVlogo} alt="" className="sidebar__logo" />
        <div className="tabs">
            <Tab title={title} icon={SidebarIcon}/>
        </div>
    </div>
  )
}

export default Sidebar