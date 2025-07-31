import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const Button = forwardRef(({ shape, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={
        'toolbar-button' +
        (props.className ? ' ' + props.className : '') +
        (shape ? ' ' + shape : '')
      }
      ref={rootRef}
    >
      {children}
    </div>
  )
})

// Component Name, for compact
Button.componentName = 'ToolBar.Button'

export default Button
