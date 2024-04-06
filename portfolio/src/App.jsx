import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'
const App = () => {
  return (
    <div id='back'>
      <Header/>
      <Routes>
      <Route
					path='/'
					Component={Home}
			/>
        <Route
					path='/about'
					Component={About}
			/>
        <Route
					path='/projects'
					Component={Projects}
			/>
        <Route
					path='/contact'
					Component={Contact}
			/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
