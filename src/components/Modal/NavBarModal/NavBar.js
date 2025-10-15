import React, { forwardRef } from 'react'

// 内库使用-start
import NavBar from './../../NavBar'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { NavBar, LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 内部组件：Cancel 按钮
const Cancel = ({ text, onClick, className, style }) => {
  function handleClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  return (
    <NavBar.Button
      className={className}
      style={style}
      iconShape="circle"
      icon={text ? '' : 'modal-navbar-button-close-icon'}
      onClick={handleClick}
    >
      {text}
    </NavBar.Button>
  )
}

// 内部组件：Ok 按钮
const Ok = ({ total, text, onClick, className, style }) => {
  function handleOkClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  return (
    <NavBar.Button className={`primary ${className || ''}`} style={style} onClick={handleOkClick}>
      {text && typeof text === 'string' ? text : LocaleUtil.locale('确定', 'SeedsUI_ok')}
      {typeof total === 'number' && `(${total})`}
    </NavBar.Button>
  )
}

// 内部组件：NavBar Head
const ModalNavBar = forwardRef(
  (
    {
      title,
      titleClassName,
      titleStyle,
      ok,
      onOk,
      okClassName,
      okStyle,
      cancel,
      onCancel,
      cancelClassName,
      cancelStyle
    },
    ref
  ) => {
    // 只显示标题
    if (cancel === null && ok === null) {
      return (
        <NavBar className="modal-navbar" ref={ref}>
          {/* 标题 */}
          <NavBar.Title className={titleClassName} style={titleStyle}>
            {title}
          </NavBar.Title>
        </NavBar>
      )
    }

    // 带按钮
    return (
      <NavBar className="modal-navbar" ref={ref}>
        {/* 确认显示时，取消在左侧 */}
        <div className="modal-navbar-button">
          {cancel && (
            <Cancel
              text={cancel}
              onClick={onCancel}
              className={cancelClassName}
              style={cancelStyle}
            />
          )}
        </div>

        {/* 标题 */}
        <NavBar.Title className={titleClassName} style={titleStyle}>
          {title}
        </NavBar.Title>

        <div className="modal-navbar-button">
          {/* 确认 */}
          {ok && <Ok className={okClassName} style={okStyle} text={ok} onClick={onOk} />}
        </div>
      </NavBar>
    )
  }
)

export default ModalNavBar
