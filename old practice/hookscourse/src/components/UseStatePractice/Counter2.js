import React, { useState } from 'react'

export default function Counter() {
  const [count,setCount] = useState(0)
  const initialCount = 0

  function increment(){
    setCount((prevCount) => prevCount+1)
    setCount((prevCount) => prevCount+1) /* this will add more +1 to prev count */
  }
  return (
    <div>
        Counter : {count} <br/>
        <button onClick={increment}>Add</button>
        <button onClick={()=>setCount(count-1)}>Sub</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
    </div>
    
  )
}
