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
      portal,
      open,

      // Style
      maskClosable,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,

      // Title
      title,

      // Ok
      ok,
      onOk,

      // Cancel
      cancel,
      onCancel,

      // Components
      children,

      // Events
      onClose
    },
    ref
  ) => {
    // 事件
    function handleCancelClick(e) {
      e.stopPropagation()

      onCancel && onCancel()
      onClose && onClose()
    }

    function handleOkClick(e) {
      e.stopPropagation()

      onOk && onOk({ close: () => onClose && onClose() })
    }

    return (
      <Modal
        ref={ref}
        safeArea={safeArea}
        portal={portal}
        open={open}
        animation={'slideUp'}
        // Style
        maskClosable={maskClosable}
        maskClassName={DOMUtil.classNames('navbarModal-mask', maskClassName)}
        maskStyle={maskStyle}
        modalClassName={DOMUtil.classNames('navbarModal', modalClassName)}
        modalStyle={modalStyle}
        // Events
        onClose={onClose}
      >
        <div>
          <NavBar
            title={title}
            ok={ok}
            cancel={cancel}
            onOk={handleOkClick}
            onCancel={handleCancelClick}
          />
        </div>

        {/* 主体 */}
        {children}
      </Modal>
    )
  }
)

export default NavBarModal
