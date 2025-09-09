import React from 'react'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const ButtonNumber = ({ children, onClick, className = '' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(children)
    }
  }

  return (
    <div
      className={DOMUtil.classNames('seed-keyboard-button seed-keyboard-button-number', className)}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonNumber
