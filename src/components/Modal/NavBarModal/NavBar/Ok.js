import React from 'react'

// 内库使用-start
import NavBar from './../../../NavBar'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { NavBar, LocaleUtil } from 'lyrixi-design-mobile'
测试使用-start */

const Ok = ({ total, text, onClick, ...props }) => {
  // 点击确定
  function handleOkClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  return (
    <NavBar.Button className="primary" {...props} onClick={handleOkClick}>
      {text && typeof text === 'string' ? text : LocaleUtil.locale('确定', 'SeedsUI_ok')}
      {typeof total === 'number' && `(${total})`}
    </NavBar.Button>
  )
}

export default Ok
