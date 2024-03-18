import React,{useContext} from 'react'
import { ModeContext } from './main';
const Comp2 = () => {
    const bg= useContext(ModeContext)
   
  return (
    <div style={{ color:"black",width: "100px", height: "100px", border: "1px solid red",margin:"50px 50px",backgroundColor:bg }}>
    </div>
  )
}

export default Comp2
