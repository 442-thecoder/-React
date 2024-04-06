import { combineReducers } from "redux"
const initialstate =
{
    count: 0,
    count1:100,
}
const reducer1 = (state=initialstate,action)=>
{
    switch (action.type)
    {
        case 'INCR': return{...state,count:state.count+1}
        case 'DECR': return{...state,count:state.count - 1}
        default: return state;
    }
}
const reducer2 = (state=initialstate,action)=>
{
    switch (action.type)
    {
        case 'ADD': return{...state,count1:state.count1 + action.amount}
        case 'SUB': return{...state,count1:state.count1 - action.amount}
        default: return state;
    }
}
const reducer= combineReducers({
  c1:reducer1,
  c2:reducer2  
})
export default reducer;