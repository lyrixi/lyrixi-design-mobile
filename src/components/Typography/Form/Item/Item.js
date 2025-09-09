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
      className={`seed-form-item${props.className ? ' ' + props.className : ''}${
        (layout || globalLayout) === 'horizontal'
          ? ` seed-form-item-layout-horizontal row`
          : ' seed-form-item-layout-vertical'
      }`}
      id={`${name ? `seed-form-item-${name}` : props?.id || ''}`}
      ref={rootRef}
    >
      {children}
    </div>
  )
})

export default FormItem
