import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Item = ({ active, disabled, style, className, onClick, children }) => {
  return (
    <div
      style={style}
      className={DOMUtil.classNames(
        'actionsheet-option',
        className,
        disabled ? 'disabled' : '',
        active ? 'active' : ''
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
    >
      {children}
    </div>
  )
}

export default Item
