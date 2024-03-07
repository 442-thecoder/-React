import { useState } from 'react'
import './App.css'

function App() {

function open ()
{
    document.getElementById('modal-body').style.display="block"
    document.getElementById('clsbtn').style.display="block"
    document.getElementById('openbtn').style.display="none"
}
function close ()
{
  document.getElementById('modal-body').style.display="none"
  document.getElementById('clsbtn').style.display="none"
  document.getElementById('openbtn').style.display="block"
}
  return (
   <div>
       <div>
       <span id='clsbtn' onClick={close}><a href="#">❌</a></span><img id="modal-body" height="100px" src="https://img.freepik.com/premium-psd/cute-baby-3d-character-with-laughing-face-expression_529119-502.jpg?size=626&ext=jpg" alt=""></img>
        </div>
        <div>
        <button id='openbtn' onClick={open}>open modal</button>
        </div>
        
   </div>
   
  )
}

export default App
