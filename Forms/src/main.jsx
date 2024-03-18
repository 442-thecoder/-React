import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Uncontrolled from './Uncontrolled.jsx'
import Sun from './Sun.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id='forms'>
    <Sun/>
    <App />
    <Uncontrolled/>
    </div>
  </React.StrictMode>,
  

)
