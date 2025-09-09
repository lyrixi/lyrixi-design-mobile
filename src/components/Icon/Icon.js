import React, { useImperativeHandle, forwardRef, useRef } from 'react'

const Icon = forwardRef(({ size, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <i
      style={
        typeof size === 'number'
          ? {
              width: `${size}px`,
              height: `${size}px`,
              fontSize: `${size}px`,
              lineHeight: `${size}px`
            }
          : {}
      }
      {...props}
      ref={rootRef}
    >
      {children}
    </i>
  )
})

export default Icon
