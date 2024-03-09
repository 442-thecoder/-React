import React from 'react'
import { useState } from 'react'
import Accordinitem from './Accordinitem'
function Accordin(props) {
    const [openIndex,setOpenIndex]=useState(-1)
    const update = (index) =>
    {
         setOpenIndex(index)
         
    }
    const updates = () =>
    {
       
         
    }
  return (
    <div>
      {props.items.map((obj,index) => (
                <Accordinitem updates={updates} id={obj.id} title={obj.title} content={obj.content} isOpen={openIndex===index} update={update}
                    key={index}  index={index} />
			))}
    </div>
  )
}

export default Accordin
