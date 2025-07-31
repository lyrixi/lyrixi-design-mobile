import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import FormContext from './../FormContext'

const FormItem = forwardRef(({ name, layout, children, ...props }, ref) => {
  const { layout: globalLayout } = useContext(FormContext)
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
      className={`form-item${props.className ? ' ' + props.className : ''}${
        (layout || globalLayout) === 'horizontal'
          ? ` form-item-layout-horizontal row`
          : ' form-item-layout-vertical'
      }`}
      id={`${name ? `form-item-${name}` : props?.id || ''}`}
      ref={rootRef}
    >
      {children}
    </div>
  )
})

export default FormItem
