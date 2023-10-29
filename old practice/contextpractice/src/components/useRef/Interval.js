import React,{useEffect, useRef, useState} from 'react'

export default function Interval() {
    const refInterval = useRef()
    const [timer,setTimer] = useState(0)
    useEffect (()=>{
        refInterval.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);
        return ()=>{
            clearInterval(refInterval.current)
        }
    })
  return (
    <div>
        <h2>Timer is : {timer}</h2>
        <button onClick={()=>clearInterval(refInterval.current)}>clear Interval</button>
    </div>
  )
}
