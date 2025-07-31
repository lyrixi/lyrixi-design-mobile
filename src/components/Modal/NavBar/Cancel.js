import React from 'react'

// 内库使用-start
import NavBar from './../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-design-mobile'
测试使用-start */

const Cancel = ({ text, onClick, ...props }) => {
  // 点击取消
  function handleClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  return (
    <NavBar.Button
      {...props}
      iconShape="circle"
      icon={text ? '' : 'modal-navbar-button-close-icon'}
      onClick={handleClick}
    >
      {text}
    </NavBar.Button>
  )
}

export default Cancel
