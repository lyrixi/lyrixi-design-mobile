import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-design-mobile'
测试使用-end */

const NavBarButton = forwardRef(({ className, size, border, ...props }, ref) => {
  return (
    <Button
      border="null"
      color="secondary"
      iconSize={16}
      {...props}
      className={DOMUtil.classNames('navbar-button', className)}
      ref={ref}
    />
  )
})

export default NavBarButton
