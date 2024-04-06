import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Movie = () => {

  const { id } = useParams()
  const[movieData,setmoviedata]=useState({})
  useEffect(()=>
  {
	console.log(id)
    axios.get('https://www.omdbapi.com/?i=${id}&apikey=4827adaa')
    .then((res)=>setmoviedata(res.data))
  },[])
  const handleRoute = () =>
  {
    window.location.href=`https://www.imdb.com/title/${id}`
  }
  return (
<div id='mainpage'>
			{movieData && (
				<div className='movieData row  '>
					<div className=' col-4'>
						<img
							src={movieData.Poster}
							alt={movieData.Title}
						/>
					</div>
					<div className='col-8'>
						<h2>{movieData.Title}</h2>
						<p>Year:{movieData.Year}</p>
            <p>Story: {movieData.Plot}</p>
            <button onClick={handleRoute}>Imdb Link</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Movie
