import React, { useState } from 'react'

export default function Counter() {
  const [employee,setEmployee] = useState({"name":"",country:""})
  const initialCount = 0
  return (
    <div>
        <input type='text' value={employee.name} onChange={(e)=>setEmployee({...employee, name: e.target.value})} />
        <input type='text' value={employee.country} onChange={(e)=>setEmployee({...employee,
            country: e.target.value})} />
        <div>
            <p>My name is : {employee.name}</p>
            <p>My country is : {employee.country}</p>
        </div>
    </div>
    
  )
}
