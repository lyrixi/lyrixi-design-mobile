import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import { createPortal } from 'react-dom'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
import NavBar from './../../NavBar'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea, NavBar, LocaleUtil } from 'lyrixi-design-mobile'
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

// NavBarModal
const NavBarModal = forwardRef(
  (
    {
      safeArea,

      // Modal fixed properties
      open,
      onClose,
      onOpen,

      // Modal: display properties
      portal,
      animation = 'slideUp',
      maskClassName,
      maskStyle,
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
      cancelStyle,
      maskClosable = true,

      // 主体
      children,
      ...props
    },
    ref
  ) => {
    // Expose
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalDOM: modalRef?.current,
        getModalDOM: () => modalRef.current
      }
    })

    useEffect(() => {
      if (open) {
        if (onOpen) onOpen(open)
      }
      // eslint-disable-next-line
    }, [open])

    // 事件
    function handleCancelClick(e) {
      onCancel && onCancel(e)
      onClose && onClose()
    }
    function handleMaskClick(e) {
      e.stopPropagation()
      if (!e.target.classList.contains('mask')) return
      if (maskClosable) {
        onClose && onClose()
      }
    }

    let Node = (
      <div
        className={DOMUtil.classNames(
          'mask modal-navbarmodal-mask',
          maskClassName,
          open ? 'active' : ''
        )}
        style={maskStyle}
        onClick={handleMaskClick}
        ref={modalRef}
      >
        <div
          data-animation={animation}
          onClick={(e) => {
            e.stopPropagation()
          }}
          {...props}
          className={DOMUtil.classNames(
            'modal-animation',
            'modal-navbarmodal',
            props.className,
            open ? ' active' : ''
          )}
        >
          {/* 头 */}
          <ModalNavBar
            title={title}
            titleClassName={titleClassName}
            titleStyle={titleStyle}
            cancel={cancel}
            onCancel={handleCancelClick}
            cancelClassName={cancelClassName}
            cancelStyle={cancelStyle}
            ok={ok}
            onOk={
              typeof onOk === 'function'
                ? () => {
                    onOk({ close: () => onClose && onClose() })
                  }
                : null
            }
            okClassName={okClassName}
            okStyle={okStyle}
          />
          {/* 主体 */}
          {children}
          {safeArea === true && <SafeArea />}
        </div>
      </div>
    )

    if (portal === null || portal === false) {
      return Node
    }
    return createPortal(Node, portal || document.getElementById('root') || document.body)
  }
)

export default NavBarModal
