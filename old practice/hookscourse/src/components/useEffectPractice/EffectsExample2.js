import React , {useState,useEffect} from 'react'

export default function EffectsExample2() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")

    useEffect(()=>{
        document.title = `you clicked: ${count} times`
        console.log("Called Use Effect")
    },[count])
    
  return (
    <div>
        <input type='text' onChange={(e)=>setName(e.target.value)}/> onchanging textbox useeffect call every time so we put dependency in second parameter of useeffect<br/>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
