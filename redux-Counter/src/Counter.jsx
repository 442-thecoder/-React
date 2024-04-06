import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement,add,sub } from './Redux/Actions'
const Counter = () => {
    const count = useSelector((state)=>state.c1.count)
    const count1 = useSelector((state)=>state.c2.count1)
    const dispatch = useDispatch()
  return (
    <div>
      <p>count:{count}</p>
      <p>count:{count1}</p>
      <button onClick={()=>dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <button onClick={()=>dispatch(add())} >add</button>
      <button onClick={()=>dispatch(sub())} >sub</button>
    </div>
  )
}

export default Counter;
