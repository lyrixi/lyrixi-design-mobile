import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import CompactWrapper from './CompactWrapper'

const Compact = forwardRef(({ children, ...props }, ref) => {
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
      className={`space-compact${props.className ? ' ' + props.className : ''}`}
      ref={rootRef}
    >
      <CompactWrapper
        targetsBaseClass={{
          Button: 'button',
          'ToolBar.Button': 'toolbar-button',
          'ToolBar.List': 'toolbar-list-combo'
        }}
      >
        {children}
      </CompactWrapper>
    </div>
  )
})

export default Compact
