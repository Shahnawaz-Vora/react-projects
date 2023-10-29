import React from 'react'
import { ItemContext, PriceContext } from '../../App'
export default function ComponentZ() {
  return (
    <div>
        <PriceContext.Consumer>
            {
                price=>{
                    return (
                        <ItemContext.Consumer>
                            {
                                (item) =>{
                                    return <div>Price: {price} and name {item}</div>
                                }
                            }
                        </ItemContext.Consumer>
                    )
                }
            }
        </PriceContext.Consumer>
    </div>
  )
}
