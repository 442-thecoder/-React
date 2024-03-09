/*import React from 'react'
import "./App.css"
function App() {
   let c=0
   const open = ()=>
   {      console.log(c++)
      if(c%2==0)
      {
        document.getElementById('p').style.display="none"
      }
      else
      {
        document.getElementById('p').style.display="block"
      }
      
   }
   const open1 = ()=>
   {      console.log(c++)
      if(c%2==0)
      {
        document.getElementById('pp').style.display="block"
      }
      else
      {
        document.getElementById('pp').style.display="none"
      }
      
   }

  return (
   <div>
    <div>
    <button id='b' onClick={open}>section#1</button>
    <p id='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, dicta, voluptatibus maxime libero voluptatem obcaecati, repudiandae minus quaerat earum eum quisquam iure. Temporibus totam rerum animi earum, eius magnam nostrum!</p>
    </div>
    <div>
    <button id='bb' onClick={open1}>section#1</button>
    <p id='pp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, dicta, voluptatibus maxime libero voluptatem obcaecati, repudiandae minus quaerat earum eum quisquam iure. Temporibus totam rerum animi earum, eius magnam nostrum!</p>
    </div>
   </div>
  )
}

export default App*/

import React from 'react'
import Accordin from './Accordin'
import './App.css'
function App() {
  const items = [
    {
       "id":"1",
       "title":"section#1",
       "content":"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor vehicula eros in dignissim. Suspendisse rhoncus et ipsum nec auctor. Nullam id purus blandit, consectetur dui quis, aliquam sapien. Aliquam tristique, diam quis lacinia fringilla, nulla mi ornare tellus, sed congue eros diam id massa. Aliquam blandit, ligula ac vehicula pulvinar, odio felis pulvinar orci, ac feugiat quam odio eu mi. Quisque eget tempus augue. Nulla pretium nisl nec quam rhoncus"
    },
    {
      "id":"2",
      "title":"section#2",
      "content":"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor vehicula eros in dignissim. Suspendisse rhoncus et ipsum nec auctor. Nullam id purus blandit, consectetur dui quis, aliquam sapien. Aliquam tristique, diam quis lacinia fringilla, nulla mi ornare tellus, sed congue eros diam id massa. Aliquam blandit, ligula ac vehicula pulvinar, odio felis pulvinar orci, ac feugiat quam odio eu mi. Quisque eget tempus augue. Nulla pretium nisl nec quam rhoncus"
    },
    {
      "id":"3",
      "title":"section#3",
      "content":"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor vehicula eros in dignissim. Suspendisse rhoncus et ipsum nec auctor. Nullam id purus blandit, consectetur dui quis, aliquam sapien. Aliquam tristique, diam quis lacinia fringilla, nulla mi ornare tellus, sed congue eros diam id massa. Aliquam blandit, ligula ac vehicula pulvinar, odio felis pulvinar orci, ac feugiat quam odio eu mi. Quisque eget tempus augue. Nulla pretium nisl nec quam rhoncus"
    },
  ]
  return (
   <body>
     <div>
      <Accordin items={items} />
    </div>
   </body>
  )
}

export default App
