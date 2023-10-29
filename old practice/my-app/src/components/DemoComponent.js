import React from "react";
export default function DemoComponent(props){
    return (
        <div>
            <h1>Hello {props.name} from {props.city}</h1>
            <h2>{props.children}</h2>
        </div>
    )
}