import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Header = () => {
  return (
    <div id='head' className='container-fluid  d-flex justify-content-between text-center'>
      <img id='logo' src="https://img.freepik.com/free-vector/movie-time-neon-sign-sign_24908-55555.jpg" alt="arya" />
      <div>
        <ul className='d-flex gap-3 align-content-center p-5 list-unstyled text-black '>
            <li><Link id='link' to='/'>HOME</Link></li>
            <li><Link id='link' to='/comedy'>Comedy</Link></li>
            <li><Link id='link' to='/about'>ABOUT</Link></li>
            <li><Link id='link' to='/contact'>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
