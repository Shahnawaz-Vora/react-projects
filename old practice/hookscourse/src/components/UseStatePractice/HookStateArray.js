import React, { useState } from 'react'

export default function Counter() {
  const [items,setItems] = useState([])
  const [employee,setEmployee] = useState("")
  const addItems = () =>{
    setItems([...items,{
        id:items.length,
        name:employee
    }])
  }
  return (
    <div>
        <input type='text' value={employee} onChange={(e)=>setEmployee(e.target.value)} />
        <button onClick={()=>addItems()}>Add Items</button>
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    </div>
    
  )
}
