import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-design-mobile'
测试使用-end */

const Clear = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={`seed-input-icon seed-input-icon-clear${
        props.className ? ' ' + props.className : ' seed-right-icon'
      }`}
      ref={ref}
    />
  )
})

export default Clear
