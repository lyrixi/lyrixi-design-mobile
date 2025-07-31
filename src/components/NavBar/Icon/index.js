import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const NavBarIcon = forwardRef(({ children, shape, icon, size, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  // 获取选中状态的Node
  function getIconNode() {
    return DOMUtil.getIconNode(icon, {
      className: 'icon',
      style: size
        ? {
            fontSize: size,
            width: size,
            height: size
          }
        : undefined
    })
  }

  const IconNode = getIconNode()
  if (!IconNode && !children) {
    return null
  }

  return (
    <div
      {...props}
      className={DOMUtil.classNames(
        'navbar-button-icon',
        props.className,
        typeof shape === 'string' ? 'shape-' + shape : ''
      )}
      ref={rootRef}
    >
      {IconNode}
      {children}
    </div>
  )
})

export default NavBarIcon
