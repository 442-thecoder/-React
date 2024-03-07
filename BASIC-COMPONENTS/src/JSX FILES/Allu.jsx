import Movie from "../Movie";
import moviesData3 from "../arr/Arr3";
function Allu ()
{
    function subscribe()
	{
		alert("please subscribe to watch")
	}
    return (
        <div className='movies'>
            {
                moviesData3.map((m) => (
              <Movie url={m.image} title={m.title} mov={subscribe} />
             ))
            }
				
			</div>
		)
}
export default Allu;