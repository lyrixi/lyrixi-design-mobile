import React, { forwardRef } from 'react'
import getButtonVisible from './getButtonVisible'
import Cancel from './Cancel'
import Ok from './Ok'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-design-mobile'
测试使用-start */

const Head = forwardRef(({ title, titleProps, ok, onOk, okProps, cancel, onCancel }, ref) => {
  // 只显示标题
  if (cancel === null && ok === null) {
    return (
      <NavBar className="navbarModal" ref={ref}>
        {/* 标题 */}
        <NavBar.Title {...titleProps}>{title}</NavBar.Title>
      </NavBar>
    )
  }

  // 带按钮
  return (
    <NavBar className="navbarModal" ref={ref}>
      {/* 取消按钮 */}
      <div className="navbarModal-button">
        <Cancel text={cancel} onClick={onCancel} />
      </div>

      {/* 标题 */}
      <NavBar.Title {...titleProps}>{title}</NavBar.Title>

      {/* 确认 */}
      <div className="navbarModal-button">
        {getButtonVisible(ok) && <Ok {...okProps} text={ok} onClick={onOk} />}
      </div>
    </NavBar>
  )
})

export default Head
