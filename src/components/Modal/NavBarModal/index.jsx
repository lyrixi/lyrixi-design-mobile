import React, { forwardRef } from 'react'
import Modal from '../Modal'
import NavBar from './NavBar'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// NavBarModal
const NavBarModal = forwardRef(
  (
    {
      safeArea,

      // Open
      open,
      onClose,

      // Portal
      portal,

      // Animation
      animation = 'slideUp',

      // Mask
      maskClosable = true,
      maskClassName,
      maskStyle,

      // Modal
      modalClassName,
      modalStyle,

      // Title
      title,
      titleClassName,
      titleStyle,

      // Ok
      ok,
      onOk,
      okClassName,
      okStyle,

      // Cancel
      cancel,
      onCancel,
      cancelClassName,
      cancelStyle,

      // 主体
      children
    },
    ref
  ) => {
    // 事件
    function handleCancelClick(e) {
      e.stopPropagation()

      onCancel && onCancel()
      onClose && onClose()
    }

    return (
      <Modal
        ref={ref}
        open={open}
        onClose={onClose}
        portal={portal}
        animation={animation}
        maskClosable={maskClosable}
        maskClassName={DOMUtil.classNames('navbarModal-mask', maskClassName)}
        maskStyle={maskStyle}
        modalClassName={DOMUtil.classNames('navbarModal', modalClassName)}
        modalStyle={modalStyle}
        safeArea={safeArea}
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
      </Modal>
    )
  }
)

export default NavBarModal
