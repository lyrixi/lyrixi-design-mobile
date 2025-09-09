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
      // 颜色: default, primary, link, warning, danger, success
      color,
      // 变体: default, outline, text, fill
      variant,
      // 尺寸: xxs, xs, s, m, l, xl
      size,
      // 圆角: xxs, xs, s, m, l, xl
      radius,
      // 形状: square, circle, round
      shape,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line
    if (color === 'default') color = undefined
    // eslint-disable-next-line
    if (variant === 'default') variant = undefined

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
          color,
          variant && `variant-${variant}`,
          size && `size-${size}`,
          radius && `radius-${radius}`,
          shape && `shape-${shape}`,
          className
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
