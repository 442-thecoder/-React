import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'
const Header = () =>
{
  const cart = useSelector((state) => state.products.cart)
  return (
		<header className=' head text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<span><svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								class='w-10 h-10 text-white p-2 bg-red-500 rounded-full'
								viewBox='0 0 24 24'>
								<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
							</svg></span><span className='logo ml-3  text-white'>𝒜𝓇𝓎𝒶  </span>
				</a>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link
						className='mr-5 text-white '
						Link='/'>
						Home
					</Link>
					<Link
						className='mr-5 text-white '
						to='/about'>
						About
					</Link>
					<Link
						className='mr-5 text-white'
						to='/Products'>
						Products
					</Link>
					<Link
						className='mr-5 text-white '
						to='/contact'>
						contact
					</Link>
				</nav>
				<Link to='/cart'>
					<button className='cart-btn inline-flex items-center  border-0 px-3 focus:outline-none  rounded text-base md:mt-0'>
						Cart
						<span className=' rounded-lg p-6'> {cart.length}</span>
					</button>
				</Link>
				<button className='login-btn inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0'>
					<Link to='/login'>Login</Link>
				</button>
			</div>
		</header>
	)
}

export default Header