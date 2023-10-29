import React, { useState } from 'react'

export default function Counter() {
  const [count,setCount] = useState(0)
  const initialCount = 0
  return (
    <div>
        Counter : {count} <br/>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Sub</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
    </div>
    
  )
}
