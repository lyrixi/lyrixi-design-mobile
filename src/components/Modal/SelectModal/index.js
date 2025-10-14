import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import NavBarModal from './../NavBarModal'

// Modal
const Modal = forwardRef(
  (
    {
      // Modal render
      animation = 'slideUp',

      // 遮罩
      portal,
      maskClassName,
      maskStyle,
      maskClosable = true,

      // 标题
      title,
      titleClassName,
      titleStyle,

      // 确定按钮
      ok,
      onOk,
      okClassName,
      okStyle,

      // 取消按钮
      cancel,
      onCancel,
      cancelClassName,
      cancelStyle,

      open,
      onClose,
      onOpen,

      // 纯渲染
      children,
      ...props
    },
    ref
  ) => {
    // 节点
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalDOM: modalRef?.current?.modalDOM,
        getModalDOM: () => modalRef?.current?.modalDOM
      }
    })

    function handleOkClick(e) {
      e.stopPropagation()
      onOk && onOk()
    }

    return (
      <NavBarModal
        ref={modalRef}
        // Modal fixed properties
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        // Modal: display properties
        animation={animation}
        maskClassName={maskClassName}
        maskStyle={maskStyle}
        title={title}
        titleClassName={titleClassName}
        titleStyle={titleStyle}
        ok={ok}
        onOk={handleOkClick}
        okClassName={okClassName}
        okStyle={okStyle}
        cancel={cancel}
        onCancel={onCancel}
        cancelClassName={cancelClassName}
        cancelStyle={cancelStyle}
        maskClosable={maskClosable}
        {...props}
        portal={portal || document.getElementById('root') || document.body}
      >
        {children}
      </NavBarModal>
    )
  }
)

export default Modal
