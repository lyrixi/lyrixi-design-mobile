import React, { forwardRef } from 'react'
import getButtonVisible from './getButtonVisible'
import Cancel from './Cancel'
import Ok from './Ok'

// 内库使用-start
import NavBar from './../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-design-mobile'
测试使用-start */

const Head = forwardRef(
  ({ title, titleClassName, titleStyle, ok, onOk, okClassName, okStyle, cancel, onCancel, cancelClassName, cancelStyle }, ref) => {
    // 只显示标题
    if (cancel === null && ok === null) {
      return (
        <NavBar className="modal-navbar" ref={ref}>
          {/* 标题 */}
          <NavBar.Title className={titleClassName} style={titleStyle}>{title}</NavBar.Title>
        </NavBar>
      )
    }

    // 带按钮
    return (
      <NavBar className="modal-navbar" ref={ref}>
        {/* 确认显示时，取消在左侧 */}
        <div className="modal-navbar-button">
          {getButtonVisible(ok) && getButtonVisible(cancel) ? (
            <Cancel text={cancel} onClick={onCancel} className={cancelClassName} style={cancelStyle} />
          ) : null}
        </div>

        {/* 标题 */}
        <NavBar.Title className={titleClassName} style={titleStyle}>{title}</NavBar.Title>

        <div className="modal-navbar-button">
          {/* 只有取消按钮时，取消在右侧 */}
          {!getButtonVisible(ok) && getButtonVisible(cancel) ? (
            <Cancel text={cancel} onClick={onCancel} className={cancelClassName} style={cancelStyle} />
          ) : null}
          {/* 确认 */}
          {getButtonVisible(ok) && <Ok className={okClassName} style={okStyle} text={ok} onClick={onOk} />}
        </div>
      </NavBar>
    )
  }
)

export default Head
