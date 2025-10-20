import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { colorClasses, backgroundColorClasses, sizeClasses, radiusClasses } from './enums'

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
      iconColor,
      iconBackgroundColor,
      iconSize,
      iconPadding,
      iconRadius,

      // 颜色: default, transparent, primary, link, warning, danger, success
      color = 'default',
      // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      backgroundColor = 'white',
      // 尺寸: xxs, xs, s, m, l, xl
      size = 'm',
      // 内边距: 数值
      padding,
      // 圆角: xxs, xs, s, m, l, xl
      radius,
      // 是否为正方形
      square,
      // 边框: none, dotted, dashed, solid
      border = 'solid',
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // 判断颜色是否在枚举值中
    const isColorClass = colorClasses.includes(color)
    const isBackgroundColorClass = backgroundColorClasses.includes(backgroundColor)
    const isSizeClass = sizeClasses.includes(size)
    const isRadiusClass = radiusClasses.includes(radius)
    let innerSize =
      typeof size === 'number' && typeof padding === 'number' ? (size || 16) - padding : size

    // 构建自定义样式
    const buttonStyle = {
      ...(!isColorClass && color ? { color } : {}),
      ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
      ...(!isSizeClass && innerSize ? { fontSize: `${innerSize}px` } : {}),
      ...(!isSizeClass && typeof size === 'number'
        ? { height: `${size}px`, width: square ? `${size}px` : 'auto' }
        : {}),
      ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
      ...style
    }

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
          isColorClass && color && `color-${color} border-color-${color}`,
          isBackgroundColorClass && backgroundColor && `bg-${backgroundColor}`,
          border !== 'none' && `border-width-default`,
          border && `border-style-${border}`,
          isSizeClass && size && `size-${size}`,
          isRadiusClass && radius && `radius-${radius}`,
          square && `shape-square`,
          className
        )}
        style={buttonStyle}
        ref={rootRef}
      >
        {icon && iconPosition !== 'right' && (
          <Icon
            icon={icon}
            className="seed-button-icon"
            color={iconColor}
            backgroundColor={iconBackgroundColor}
            size={iconSize}
            padding={iconPadding}
            radius={iconRadius}
          />
        )}
        {children && <div className="seed-button-text">{children}</div>}
        {icon && iconPosition === 'right' && (
          <Icon
            icon={icon}
            className="seed-button-icon"
            color={iconColor}
            backgroundColor={iconBackgroundColor}
            size={iconSize}
            padding={iconPadding}
            radius={iconRadius}
          />
        )}
      </div>
    )
  }
)

// Component Name, for compact
Button.componentName = 'Button'

export default Button
