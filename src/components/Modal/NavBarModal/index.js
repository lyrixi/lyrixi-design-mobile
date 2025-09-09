import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import { createPortal } from 'react-dom'
import NavBar from './../NavBar'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

// NavBarModal
const NavBarModal = forwardRef(
  (
    {
      safeArea,

      // Modal fixed properties
      visible,
      onVisibleChange,

      // Modal: display properties
      portal,
      animation = 'slideUp',
      maskProps,
      title,
      titleProps,
      ok,
      onOk,
      okProps,
      cancel,
      onCancel,
      cancelProps,
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
      if (visible) {
        if (onVisibleChange) onVisibleChange(visible)
      }
      // eslint-disable-next-line
    }, [visible])

    // 事件
    function handleCancelClick(e) {
      onCancel && onCancel(e)
      onVisibleChange && onVisibleChange(false)
    }
    function handleMaskClick(e) {
      e.stopPropagation()
      if (!e.target.classList.contains('mask')) return
      if (maskProps?.onClick) maskProps.onClick(e)
      if (maskClosable) {
        onVisibleChange && onVisibleChange(false)
      }
    }

    let Node = (
      <div
        {...maskProps}
        className={`mask modal-navbarmodal-mask${
          maskProps?.className ? ' ' + maskProps.className : ''
        }${visible ? ' active' : ''}`}
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
            SafeArea.getSafeAreaClassName(safeArea),
            props.className,
            visible ? ' active' : ''
          )}
        >
          {/* 头 */}
          <NavBar
            title={title}
            titleProps={titleProps}
            cancel={cancel}
            onCancel={handleCancelClick}
            cancelProps={cancelProps}
            ok={ok}
            onOk={
              typeof onOk === 'function'
                ? () => {
                    onOk({ close: () => onVisibleChange && onVisibleChange(false) })
                  }
                : null
            }
            okProps={okProps}
          />
          {/* 主体 */}
          {children}
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
