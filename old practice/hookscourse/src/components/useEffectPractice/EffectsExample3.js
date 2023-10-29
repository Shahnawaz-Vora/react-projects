import React , {useState,useEffect} from 'react'

export default function EffectsExample3() {
    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('this is mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("Called Use Effect")
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
          window.removeEventListener('mousemove',logMousePosition)
          console.log('component is unmounted , and the code is clean')
        }
    },[])
    
  return (
    <div>
        <p>mouse position , this will call only mouse function and only once the useEffect</p>
        cordinate X,Y : {X} , {Y}
    </div>
  )
}
