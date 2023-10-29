import React, { useState } from "react";
export default function StateComponent(){
    const[title,setTitle] = useState('Initial Title')
    function hello(){
        console.log("Hello")
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={()=>setTitle('After click Title')}>Change Title</button>
            <h1>Onclick Example</h1>
            <button onClick={hello}>On Click</button>
        </div>
    )
}