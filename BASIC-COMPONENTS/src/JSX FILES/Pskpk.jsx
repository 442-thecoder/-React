import Movie from "../Movie";
import moviesData1 from "../arr/Arr1";
function Pspk ()
{ function subscribe()
	{
		alert("please subscribe to watch")
	}
    return (
        <div className='movies'>
            {
                moviesData1.map((m) => (
              <Movie url={m.image} title={m.title} mov={subscribe} />
             ))
            }
				
			</div>
		)
}
export default Pspk;