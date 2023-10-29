import React, { useReducer } from 'react'
const initialState = {
    counterA:0,
    counterB:15
}

const reducer =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state ,counterA: state.counterA + action.value}
        case 'decrement':
            return {...state ,counterA: state.counterA - action.value}
        case 'incrementB':
            return {...state ,counterB: state.counterB + action.value}
        case 'decrementB':
            return {...state ,counterB: state.counterB - action.value}
        case 'reset':
            return initialState
            default:
                return state
    }
}
export default function Counter2() {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count.counterA}</h1>
        <button onClick={()=>dispatch({type: 'increment',value:5})}>Increment A</button>
        <button onClick={()=>dispatch({type: 'decrement' , value:2})}>Decrement A</button>
        <button onClick={()=>dispatch({type: 'reset'})}>Reset A</button>
        <h1>{count.counterB}</h1>
        <button onClick={()=>dispatch({type: 'incrementB',value:5})}>Increment B</button>
        <button onClick={()=>dispatch({type: 'decrementB' , value:2})}>Decrement B</button>
        <button onClick={()=>dispatch({type: 'reset'})}>Reset B</button>

    </div>
  )
}
