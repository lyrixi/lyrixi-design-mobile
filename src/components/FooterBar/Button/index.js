import React, { forwardRef } from 'react'

// 内库使用-start
import Button from './../../Button'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Button, DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 底部按钮
const FooterBarButton = forwardRef(
  ({
    variant = 'fill',
    radius = 'm',
    className,
    ...props
  }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        radius={radius}
        className={DOMUtil.classNames('footerbar-button', className)}
        {...props}
      />
    )
  }
)

export default FooterBarButton
