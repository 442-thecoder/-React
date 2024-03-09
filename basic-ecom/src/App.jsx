import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App ()
{
  const [products,setProducts]=useState([])
  const[count, setCount]=useState(0)
 useEffect(() =>
  {
   fetch("https://freetestapi.com/api/v1/actresses")
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err)=>console.log("my error"+err))
  },[])
  return (
		<div>
      <header>
      <div id="head0">
            <img id="logoimg" src="https://previews.123rf.com/images/icetray/icetray1602/icetray160200421/51671440-actress-word-on-concrette-wall.jpg" alt=""/>
        </div>
        <div id="head1">
            <ul>
                <li><a href="./index.html">HOME</a></li>
                <li><a href="#mainpage">ACTRESS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
        <div id="head2">
        <button id='cart'>
          MY FAV :  {count}
        </button>
        </div>
      </header>
			<div></div>
			<div id='mainpage'>
				{products.map((pr, index) => (
					<div key={index} className='subdiv'>
						<img
							src={pr.image}
							alt={pr.title}
							height='100'
							width='100'
						/>
						<h2>{pr.name}</h2>
            <h4>{pr.birth_year}</h4>
            <h4>{pr.nationality}</h4>
            <button  onClick={() => setCount((count) => count + 1)}>add to fav</button>
					</div>
				))}
			</div>
      
</div>
	)
}

export default App
