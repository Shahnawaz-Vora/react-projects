import React from 'react'

function CounterComponent({text,count}) {
    console.log(`Rendering ${text}`)
  return (
    <div>
        {text} : {count}
    </div>
  )
}

export default React.memo(CounterComponent)
