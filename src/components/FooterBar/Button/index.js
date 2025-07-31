import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 底部按钮
export default function FooterBarButton({
  disabled,
  className = 'default',
  onClick,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={DOMUtil.classNames('footerbar-button', className, disabled ? 'disabled' : '')}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
