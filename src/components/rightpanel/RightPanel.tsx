import React from 'react'
import Input from '../animatedinput/AnimatedInput'
import Button from '../button/Button'
import "./RightPanel.css"
import KVlogo from "../../assets/kv-logo.png"
import AnimatedInput from '../animatedinput/AnimatedInput'

const RightPanel = () => {
  return (
    <div className='rightpanel__container'>
         <div className="login_input">
            <img src={KVlogo} alt="" />
          <AnimatedInput inputType="text" id="email" placeholder="Email"></AnimatedInput>
          <AnimatedInput
            inputType="password"
            id="password"
            placeholder="Password"
          ></AnimatedInput>
          <Button
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "#03AEEE",
            }}
          >
            Login
          </Button>
        </div>
    </div>
  )
}

export default RightPanel