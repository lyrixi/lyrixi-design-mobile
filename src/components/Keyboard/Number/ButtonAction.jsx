import React from 'react'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const ButtonAction = ({ onClick, className = '', children }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
    // 如果className包含ok相关的类名，则阻止事件冒泡
    if (className && className.includes('ok')) {
      e.stopPropagation()
    }
  }

  return (
    <div
      className={DOMUtil.classNames('seed-keyboard-button seed-keyboard-button-action', className)}
      onTouchStart={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonAction
