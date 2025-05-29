import React, { useState } from 'react'
import useTrackMouseMovement from "../hooks/useTrackMouseMovement.ts"
const Hooks = () => {
    const [val, setVal] = useState(0);
    const {x, y} = useTrackMouseMovement();
    // const handleClickIncrement = () => {
    //     setVal((val) => val+1)
    // }
    //  const handleClickDecrement = () => {
    //     setVal((val) => val-1)
    // }
  return (
    // <div style={{
    //   display: 'flex', flexDirection: 'column', height: 'fit-content', width : '100vw', justifyContent : 'center', alignItems : 'center'
    // }}>
    //     <p>{val}</p>
    //     <button onClick={handleClickIncrement}>++</button>
    //     <button onClick={handleClickDecrement}>----</button>
    // </div>

    <div>
           <p>Mouse Position: X: {x}, Y: {y}</p>
    </div>

  )
}

export default Hooks