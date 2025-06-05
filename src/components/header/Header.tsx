import { useNavigate } from "react-router-dom"
import ProfileIcon from "../profileicon/ProfileIcon"
import "./Header.css"

const Header = () => {
  const navigator = useNavigate()
  return (
    <div className='header__container'>
      <ProfileIcon onClick={() => {navigator(`/employee/profile`)}}/>
    </div>
  )
}

export default Header