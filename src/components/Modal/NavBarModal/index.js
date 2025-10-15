import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import { createPortal } from 'react-dom'
import NavBar from './NavBar'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea, LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

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
          <NavBar
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
