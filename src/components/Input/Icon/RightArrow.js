import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-design-mobile'
测试使用-end */

const RightArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={`seed-input-icon seed-input-icon-right-arrow${
        props.className ? ' ' + props.className : ' seed-right-icon'
      }`}
      ref={ref}
    />
  )
})

export default RightArrow
