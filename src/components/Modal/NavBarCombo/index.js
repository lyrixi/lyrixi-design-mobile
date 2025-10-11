import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import NavBarModal from './../NavBarModal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Combo = forwardRef(
  (
    {
      comboRender,
      comboChildren,
      comboStyle,
      comboClassName,

      // NavBarModal
      portal,
      animation,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,
      titleClassName,
      titleStyle,
      ok,
      onOk,
      okClassName,
      okStyle,
      cancel,
      onCancel,
      onClose,
      onOpen,
      cancelClassName,
      cancelStyle,
      maskClosable,
      children,
      ...props
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const [open, setOpen] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current,
        getComboDOM: () => comboRef.current,
        close: () => {
          setOpen(false)
        },
        open: () => {
          setOpen(true)
        }
      }
    })

    useEffect(() => {
      if (typeof open !== 'boolean') return
      if (open) {
        onOpen()
      } else {
        onClose()
      }
      // eslint-disable-next-line
    }, [open])

    // 获取Combo节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          open,
          style: comboStyle,
          className: DOMUtil.classNames('modal-navbar-combo', open ? 'expand' : '', comboClassName),
          onClick: () => {
            setOpen(true)
          }
        })
      }
      return (
        <div
          {...props}
          className={DOMUtil.classNames('modal-navbar-combo', comboClassName)}
          style={comboStyle}
          onClick={() => {
            setOpen(true)
          }}
          ref={comboRef}
        >
          {comboChildren}
        </div>
      )
    }
    const ComboNode = getComboNode()

    return (
      <>
        {/* Combo */}
        {ComboNode}

        {/* Modal */}
        <NavBarModal
          portal={portal}
          animation={animation}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          className={modalClassName}
          style={modalStyle}
          title={title}
          titleClassName={titleClassName}
          titleStyle={titleStyle}
          ok={ok}
          onOk={onOk}
          okClassName={okClassName}
          okStyle={okStyle}
          cancel={cancel}
          onCancel={onCancel}
          cancelClassName={cancelClassName}
          cancelStyle={cancelStyle}
          maskClosable={maskClosable}
          onClose={setOpen}
          open={open}
        >
          {children}
        </NavBarModal>
      </>
    )
  }
)

export default Combo
