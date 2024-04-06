import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' bg-black text-white'>
      <ul className=' list-unstyled d-flex justify-content-around '>
      <li><Link className=' text-decoration-none text-white' to='/'>Home</Link></li>
      <li> <Link className=' text-decoration-none text-white' to='/about'>About</Link></li>
      <li><Link className=' text-decoration-none text-white'  to='/Projects'>Projects</Link></li>
      <li><Link className=' text-decoration-none text-white' to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header
