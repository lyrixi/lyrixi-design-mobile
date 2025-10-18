import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Icon = forwardRef(
  ({ size, icon, style, className, shape, disabled, children, ...props }, ref) => {
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
        style={{
          width: `${size || 16}px`,
          height: `${size || 16}px`,
          fontSize: `${size || 16}px`,
          lineHeight: `${size || 16}px`,
          ...(style || {})
        }}
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-icon',
          icon,
          className,
          shape ? 'shape-' + shape : ''
        )}
        disabled={disabled}
        ref={rootRef}
      >
        {children}
      </i>
    )
  }
)

export default Icon
