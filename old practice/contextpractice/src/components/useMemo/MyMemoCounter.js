import React, { useState,useMemo } from 'react'

export default function MyMemoCounter() {
    const [counterA,setCounterA] = useState(0);
    const [counterB,setCounterB] = useState(0);

    const incrementA = () => {
        setCounterA(counterA+1)
    }

    const incrementB = () => {
        setCounterB(counterB+2)
    }

    const evenNumber = useMemo((result)=>{
        let i=0
        while (i < 2000000000) i++
        result = counterA % 2 === 0
        return result
    },[counterA])

     
  return (
    <div>
        <div>
            <p>Counter A is {counterA} and it is : {evenNumber ? "even" : "odd"}</p>
            <button onClick={incrementA}>increment A</button>
        </div>
        <div>
            <p>Counter B is {counterB} and it is : {evenNumber ? "even" : "odd"}</p>
            <button onClick={incrementB}>increment B</button>
        </div>
    </div>
  )
}
