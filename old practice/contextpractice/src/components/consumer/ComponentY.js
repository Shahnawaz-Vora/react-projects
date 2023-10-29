import React, { useContext } from 'react'
import ComponentZ from './ComponentZ'
import { ItemContext, PriceContext } from '../../App'


export default function ComponentY() {
    const price = useContext(PriceContext)
    const item = useContext(ItemContext)
  return (
    <div>
        {price} - {item}
        <ComponentZ/>
    </div>
  )
}
