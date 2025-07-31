import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Button = forwardRef(
  (
    {
      // 形状: square, circle, round
      shape,
      children,
      ...props
    },
    ref
  ) => {
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
        className={DOMUtil.classNames(
          'button',
          props.className,
          typeof shape === 'string' ? 'shape-' + shape : ''
        )}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

// Component Name, for compact
Button.componentName = 'Button'

export default Button
