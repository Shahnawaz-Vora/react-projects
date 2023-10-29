import React from 'react'

export default function InlineStyleSheet() {
  const heading = {
    fontSize:'100px',
    color:'pink'
  }
  const heading1 = {
    fontSize:'100px',
    color:'yellow'
  }
    return (
    <div>
        <p style={heading}>InlineStyleSheet</p>
        <p style={heading1}>InlineStyleSheet</p>
    </div>
  )
}
