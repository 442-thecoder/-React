import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import React from 'react'
import News from './Arrdata'
import Child from './Child'

function App(props) {
 
  

  return (
    <div>
      <h1>NEWS</h1>
    <div id='mainpage'>
      
       {
                News.map((n,index) => (
                   
                  <Child publish={n.publishedAt} id={n.id}  content={n.content} name={n.name} image={n.urlToImage} title={n.title} des={n.description} />
              
             ))
            }
      
  </div>
  </div>
   
  )
}

export default App
