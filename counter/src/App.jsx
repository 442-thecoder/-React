import React from "react";
import './App.css'
import { useState } from "react";
function App()
{
   const[c,setcount]=useState(0)
   function add()
   {
      if(c>24)
      {
          alert('i love u')
      }
      else
      {
        setcount(c+1)
        console.log(c)
        if(c%2==0)
        {
            document.getElementById('text').textContent="odd"
            
        }
        else
        {
            document.getElementById('text').textContent="even"
        }
      }
    
   } 
   function sub()
   {
      if(c<-24)
      {
          alert('i hate u')
      }
      else
      {
        setcount(c-1)
        console.log(c)    
        if(c%2==0)
        {
            document.getElementById('text').textContent="odd"
            
        }
        else
        {
            document.getElementById('text').textContent="even"
        }

      }
    
   } 
   function reset()
   {
      setcount(0)
      document.getElementById('text').textContent=""
   }


  return(
    <div>
     <div>
     <p id="text"></p>
     </div>
    <div id="count">
     <p id="countc">COUNT:{c}</p>
     <div id="counter">
     <button onClick={(add)}>❤️</button>
     <button onClick={(sub)}>💔</button>
     <button onClick={(reset)}>🔁</button>
     </div>
    </div>
    </div>
  )
}
export default App;