import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import Comedy from './pages/Comedy'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/comedy' Component={Comedy}>Comedy</Route>
      <Route path='/movie/:id' Component={Movie} />
      <Route path='/' Component={Movies}>home</Route>
      <Route path='/about' Component={About}>About</Route>
      <Route path='/contact' Component={Contact}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
