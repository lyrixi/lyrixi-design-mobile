import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { createPortal } from 'react-dom'

// 内库使用-start
import getClassNameByAnimation from './../../Modal/api/getClassNameByAnimation'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-design-mobile'
const getClassNameByAnimation = Modal.getClassNameByAnimation
测试使用-end */

// 对话框
const Confirm = forwardRef(
  (
    {
      portal,
      maskClosable,
      maskProps,
      visible,
      onVisibleChange,
      animation = 'zoom',
      children,
      ...props
    },
    ref
  ) => {
    const maskRef = useRef(null)
    const modalRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        maskDOM: maskRef.current,
        getMaskDOM: () => maskRef.current,
        modalDOM: modalRef.current,
        getModalDOM: () => modalRef.current
      }
    })

    // 点击遮罩
    function handleMaskClick(e) {
      if (maskProps?.onClick) maskProps.onClick(e)
      if (maskClosable && onVisibleChange) onVisibleChange(false)
      e.stopPropagation()
    }

    // 点击模态框
    function handleModalClick(e) {
      e.stopPropagation()
    }

    // 获取激活状态样式
    function getActiveClass() {
      return visible ? ' active' : ''
    }

    return createPortal(
      <div
        {...maskProps}
        className={DOMUtil.classNames('mask confirm-mask', maskProps?.className, getActiveClass())}
        onClick={handleMaskClick}
        ref={maskRef}
      >
        <section
          {...props}
          className={DOMUtil.classNames(
            'modal-animation confirm-modal',
            props.className,
            getClassNameByAnimation(animation),
            getActiveClass()
          )}
          data-animation={animation}
          ref={modalRef}
          onClick={handleModalClick}
        >
          {children}
        </section>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Confirm
