import React from 'react'
import Comp2 from './Comp2'

const Comp1 = () => {
  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid red",margin:"50px 50px" }}>
      <Comp2/>
    </div>
  )
}

export default Comp1
