import React from 'react'
import './Child.css'
function Child(props) {
  return (

    <div id='news'>
      <h5>{props.title}</h5>
      <h2>{props.id}</h2>
      <h3>{props.publish}</h3>
      <h4>{props.name}</h4>
      <img src={props.image} alt="" />
      <p>{props.content}</p>
      <button>add to watch later</button>
    </div>
  )
}

export default Child
