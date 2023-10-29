import React from "react";
export default function ConditionalComponent(){
    const show = false;
    return (
        <div>
            {
                show ? <h1>Conditional True</h1> : <h1>Conditional False</h1>
            }
            
        </div>
    )
}