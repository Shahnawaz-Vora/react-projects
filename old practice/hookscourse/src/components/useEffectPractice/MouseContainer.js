import React from 'react'
import { useState } from 'react'
import EffectsExample3 from './EffectsExample3'

export default function MouseContainer() {
    const [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <EffectsExample3/>}
    </div>
  )
}
