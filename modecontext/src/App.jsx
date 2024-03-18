import { useState,useContext } from 'react'
import './App.css'
import Comp from './Comp'
import { ModeContext } from './main';

function App() {

  
 
  
  const [bg, setbg] = useState('#000000')
  function change()
  {
     //  Math.round(Math.random() * 10000000).toString(16)
      const random_color = input.value
      setbg(random_color)
  }

  return (
    <>
    <div id='parent' style={{ width: "400px", height: "400px", border: "1px solid red",backgroundColor:bg}}>
    <input type="color"  onChange={change}  name="" id="input" />
    <ModeContext.Provider    value={bg}>
    <Comp/>
    </ModeContext.Provider>
    </div>
    </>
  )
}

export default App
