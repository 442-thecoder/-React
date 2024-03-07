import Movie from "../Movie";
import moviesData2 from "../arr/Arr2";
function Rc()
{
    function subscribe()
	{
		alert("please subscribe to watch")
	}
    return (
        <div className='movies'>
            {
                moviesData2.map((m) => (
              <Movie url={m.image} title={m.title} mov={subscribe} />
             ))
            }
				
			</div>
		)
}
export default Rc;