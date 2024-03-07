function Movie (props)
{
 const {title,url}=props
    return (
			<div className="movie">
               
				<img
                src={url}
					alt='movies'
				/>
				<h4>{title}</h4>
				<button onClick={()=> props.mov()}><a href="">WATCH NOW</a></button>
                
			</div>
		)
}
export default Movie;