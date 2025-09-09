import React from 'react'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const ButtonQuick = ({ onClick, className = '', children }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
    e.stopPropagation()
  }

  return (
    <div
      className={DOMUtil.classNames('seed-keyboard-button-quick', className)}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonQuick
