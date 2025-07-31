import React, { forwardRef } from 'react'
import Base from './../Base'

const Text = forwardRef(({ children, ...props }, ref) => {
  return (
    <Base
      {...props}
      className={`typography-paragraph${props.className ? ' ' + props.className : ''}`}
      ref={ref}
    >
      {children}
    </Base>
  )
})

export default Text
