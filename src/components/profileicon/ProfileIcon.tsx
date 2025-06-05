import React from 'react'
import "./ProfileIcon.css"

type ProfileType = {
  onClick ?: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const ProfileIcon = ({onClick} :  ProfileType) => {
  return (
      <div className="profile__pic" onClick={onClick} >
        <img src="/profile1.svg" alt="" className='profile_placeholder_img'/>
      </div>
  )
}

export default ProfileIcon