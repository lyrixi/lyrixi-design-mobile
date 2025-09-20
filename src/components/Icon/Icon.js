import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Icon = forwardRef(({ size, className, disabled, children, ...props }, ref) => {
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
      className={DOMUtil.classNames('lyrixi-icon', className)}
      disabled={disabled}
      ref={rootRef}
    >
      {children}
    </i>
  )
})

export default Icon
