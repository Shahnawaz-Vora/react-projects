import React from 'react'
import './mystyle.css'
export default function RegularStyleSheet(props) {
    const className = props.primary ? 'primary' : 'secondary'
  return (
    <div className={className}>RegularStyleSheet</div>
  )
}
