import React from "react";
export default function EmployeeList(){
    const employees = ["shanu","siyan","sharif","shanaa","zaheda"];
    return (
        <div>
        {
            employees.map((employee)=>{
                return <span key={employee}>{employee},</span>
            })
        }
        </div>
    )
}