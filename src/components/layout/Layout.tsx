import React, { type ReactNode } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Layout.css"
import Header from '../header/Header'

const Layout = ({children} : {children :ReactNode }) => {
  return (
    <div className='Layout_container'>
        <Sidebar />
        <div className="main__container">
            <Header />
            {children}
        </div>
    </div>
  )
}

export default Layout