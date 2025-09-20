import React, { forwardRef } from 'react'
import MoreWrapper from './../MoreWrapper'

// 内库使用-start
import Button from './../../Button'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Button, DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 底部按钮
const FooterBarButton = forwardRef(
  ({ variant = 'fill', radius = 'm', size = 'm', className, more, onClick, ...props }, ref) => {
    const button = (
      <Button
        ref={ref}
        variant={variant}
        radius={radius}
        size={size}
        className={DOMUtil.classNames('footerbar-button', className)}
        {...props}
      />
    )

    if (more) {
      return (
        <MoreWrapper more={more} onClick={onClick}>
          {button}
        </MoreWrapper>
      )
    }

    return React.cloneElement(button, { onClick })
  }
)

export default FooterBarButton
