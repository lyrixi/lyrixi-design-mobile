import React from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 底部按钮
export default function FooterButton({ disabled, type, id, name, primary, onChange }) {
  function handleClick() {
    onChange && onChange({ type, id, name, primary })
  }
  return (
    <div
      className={DOMUtil.classNames(
        'layout-footer-button',
        primary ? 'layout-footer-button-primary' : 'layout-footer-button-default',
        disabled ? 'disabled' : ''
      )}
      onClick={handleClick}
    >
      {name}
    </div>
  )
}
