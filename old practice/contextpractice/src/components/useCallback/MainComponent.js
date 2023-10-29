import React, { useCallback, useState } from 'react'
import ButtonComponent from './ButtonComponent'
import CounterComponent from './CounterComponent'
function MainComponent() {
  const [teachers,setTeachers] = useState(25)
  const [students,setStudents] = useState(50)

  const incrementTeachers = useCallback(()=>{
    setTeachers(teachers + 5);
  },[teachers])

  const incrementStudents = useCallback(()=>{
    setStudents(students + 5);
  },[students])

  return (
    <div>
        <CounterComponent text="Teachers"  count={teachers}/>
        <ButtonComponent handleClick={incrementTeachers}>Increment Teachers</ButtonComponent>
        <CounterComponent text="Students"  count={students}/>
        <ButtonComponent handleClick={incrementStudents}>Increment Students</ButtonComponent>

    </div>
  )
}

export default React.memo(MainComponent)