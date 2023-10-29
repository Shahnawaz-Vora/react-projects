import React from "react";
export default function DynamicEmployeeList(props){
    const {name,age,city} = props;
    return(
        <div>
            <h2>{`Name: ${name} Age: ${age} City: ${city}`}</h2>
        </div>
    )
}