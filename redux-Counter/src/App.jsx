import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import Counter from './Counter'
const App = () => {
  return (
    <div>
      <Provider store={store}> 
       <h1>REDUX COUNTER</h1>
        <Counter/>
      </Provider>
    </div>
  )
}

export default App
