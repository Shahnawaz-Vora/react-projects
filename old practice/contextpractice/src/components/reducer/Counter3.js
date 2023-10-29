import React, { useReducer } from 'react'
const initialState = 0

const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
            default:
                return state
    }
}
export default function Counter3() {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [countB,dispatchB] =  useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>

        <h1>{countB}</h1>
        <button onClick={()=>dispatchB('increment')}>Increment</button>
        <button onClick={()=>dispatchB('decrement')}>Decrement</button>
        <button onClick={()=>dispatchB('reset')}>Reset</button>
    </div>
  )
}
