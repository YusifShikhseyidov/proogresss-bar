import React from 'react'

const Circle = ({children, active}) => {
  return (
    <div className={children<=active ? "circle active" : "circle"}>{children}</div>
  )
}

export default Circle