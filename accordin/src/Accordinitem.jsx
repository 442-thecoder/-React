import React from 'react'
import { useState } from 'react'
function Accordinitem(props) {
    const {title,content,isOpen,update,updates,index}= props
  return (
    
      <div>
			<h1>
              <button onMouseEnter={()=> updates()} onClick={() => update(index)}>{title} <span>{ isOpen ?'😎':'😐'}</span></button>
			</h1>
          { isOpen && <p>{content}</p>}

		</div>
    
  )
}

export default Accordinitem
