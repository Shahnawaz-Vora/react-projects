import React from "react";
import DynamicEmployeeList from "./DynamicEmployeeList";
export default function EmployeeList1(){
    const employees = [
        {
            id:1,
            name:"shanu",
            city:"Anand",
            age:"26"
        },
        {
            id:2,
            name:"siyan",
            city:"Anand",
            age:"16"
        },
        {
            id:3,
            name:"sharif",
            city:"Indore",
            age:"50"
        }
    ]
    return (
        <div>
        {
            employees.map((employee)=>{
                return <DynamicEmployeeList key={employee.id} name = {employee.name} age={employee.age} city={employee.city}/>
            })
        }
        </div>
    )
}