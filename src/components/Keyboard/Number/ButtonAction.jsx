import React from 'react'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'seedsui-react'
测试使用-end */

const ButtonAction = ({ onClick, className = '', children }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={DOMUtil.classNames('seed-keyboard-button seed-keyboard-button-action', className)}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonAction
