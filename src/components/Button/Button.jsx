import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-design-mobile'
测试使用-end */

const Button = forwardRef(
  (
    {
      // Icon
      icon,
      iconPosition,
      iconSize,
      iconShape,
      // 颜色: default, primary, link, warning, danger, success
      color = 'default',
      // 背景颜色: default, white, primary, link, warning, danger, success
      backgroundColor = 'white',
      // 边框: none, dotted, dashed, solid
      border = 'solid',
      // 尺寸: xxs, xs, s, m, l, xl
      size = 'm',
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
          'seed-button',
          color && `color-${color} border-color-${color}`,
          backgroundColor && `bg-${backgroundColor}`,
          border !== 'none' && `border-width-default`,
          border && `border-style-${border}`,
          size && `size-${size}`,
          radius && `radius-${radius}`,
          shape && `shape-${shape}`,
          className
        )}
        ref={rootRef}
      >
        {icon && iconPosition !== 'right' && (
          <Icon icon={icon} className="seed-button-icon" size={iconSize} shape={iconShape} />
        )}
        {children && <div className="seed-button-text">{children}</div>}
        {icon && iconPosition === 'right' && (
          <Icon icon={icon} className="seed-button-icon" size={iconSize} shape={iconShape} />
        )}
      </div>
    )
  }
)

// Component Name, for compact
Button.componentName = 'Button'

export default Button
