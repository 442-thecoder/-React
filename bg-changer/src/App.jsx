 /*import { useState } from 'react'
 import './App.css'

 function App() {
  const [bg, setbg] = useState('#000000')
  function change()
  {
      Math.round(Math.random() * 10000000).toString(16)
     const random_color = "#"+Math.round(Math.random() * 10000000).toString(16)
      setbg(random_color)
  }
  return (
       <body style={{backgroundColor:bg}}>
         <div>
           <button onClick={change} >change</button>
        </div>
       </body>
  )
}
export default App */

 import { useState } from 'react'
 import './App.css'
 import React from 'react'

 function App() {
  const [bg, setbg] = useState('#000000')
   function change()
   {
      //  Math.round(Math.random() * 10000000).toString(16)
       const random_color = input.value
       console.log(random_color)
       setbg(random_color)
   }
   return (
       <body style={{backgroundColor:bg}}>
         <div>
            <input type="color"  onChange={change}  name="" id="input" />
         </div>
       </body>
   )
 }
 export default App
// import { Component } from 'react'
// import "./App.css"

// export default class App extends Component {
//   constructor()
//   {
//     super()
//     this.state={background:'#000000'}
//   }
//   change = () =>
//   {
//     Math.round(Math.random() * 10000000).toString(16)
// 			const random_color ="#" + Math.round(Math.random() * 10000000).toString(16)
//      this.setState(random_color)
//   }
//   render() {
//     return (
//      <body style={{ backgroundColor: this.state.background }}>
//        <div>
//         <input onChange={this.change} type="color" id="input" />
//        </div>
//      </body>
//     )
//   }
// }
