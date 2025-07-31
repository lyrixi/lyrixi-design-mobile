import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import NavBarIcon from './../Icon'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const NavBarButton = forwardRef(
  ({ children, iconShape, icon, iconSize, iconPosition = 'left', ...props }, ref) => {
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
        className={DOMUtil.classNames('navbar-button', props.className)}
        ref={rootRef}
      >
        {iconPosition !== 'right' && <NavBarIcon icon={icon} size={iconSize} shape={iconShape} />}
        {children && <div className="navbar-button-text">{children}</div>}
        {iconPosition === 'right' && <NavBarIcon icon={icon} size={iconSize} shape={iconShape} />}
      </div>
    )
  }
)

export default NavBarButton
