import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Comedy = (props) => {

    const [movies,setmovies]=useState([])
	const navigate= useNavigate()
useEffect(() =>
  {
   fetch("https://api.sampleapis.com/movies/comedy")
     .then((res) => res.json())
     .then((data) => setmovies(data))
     .catch((err)=>console.log("my error"+err))
	 console.log(movies)
  },[])
  return (
		<div>
			{movies ? (
			<div id='mainpage'>
				{movies.map((movie, index) => (
					<div data-aos="zoom-in-up" key={index} id='movie' >
						<img className='movie card-img-top'
							src={movie.posterURL}
							alt={movie.title}
							height='250'
							width='200'
						/>
						<h6 className=' card-title'>{movie.title}</h6><br />
                        <button onClick={()=> navigate(`/movie/${movie.imdbId}`)} className=' card-footer'>see more</button>
					</div>
				))}
			</div>     
			):(  <p> no movies here</p> )}
        </div>
        
	)
}

export default Comedy;
