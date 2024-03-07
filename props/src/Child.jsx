import React from 'react'
import "./Child.css"
 function Child (props) {
  return (
    <div id='movie'>
    <img src={props.movies} alt="" />
    <p>{props.titles}</p>
       
    </div>
  )
}
export default Child