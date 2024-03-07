import Movie from "../Movie";
import moviesData from "../arr/Arr";
function Chiru ()
{
    function subscribe()
	{
		alert("please subscribe to watch")
	}
    return (
        <div className='movies'>
            {
                moviesData.map((m) => (
              <Movie p={m.p} url={m.image} title={m.title} mov={subscribe}  />
             ))
            }
				
			</div>
		)
}
export default Chiru;