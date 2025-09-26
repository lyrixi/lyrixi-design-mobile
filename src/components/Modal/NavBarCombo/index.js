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
      titleProps,
      ok,
      onOk,
      okProps,
      cancel,
      onCancel,
      onVisibleChange,
      cancelProps,
      maskClosable,
      children,
      ...props
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const [visible, setVisible] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current,
        getComboDOM: () => comboRef.current,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    useEffect(() => {
      if (visible === null) return
      typeof onVisibleChange === 'function' && onVisibleChange(visible)

      // eslint-disable-next-line
    }, [visible])

    // 获取Combo节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          visible,
          style: comboStyle,
          className: DOMUtil.classNames(
            'modal-navbar-combo',
            visible ? 'expand' : '',
            comboClassName
          ),
          onClick: () => {
            setVisible(true)
          }
        })
      }
      return (
        <div
          {...props}
          className={DOMUtil.classNames('modal-navbar-combo', comboClassName)}
          style={comboStyle}
          onClick={() => {
            setVisible(true)
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
          titleProps={titleProps}
          ok={ok}
          onOk={onOk}
          okProps={okProps}
          cancel={cancel}
          onCancel={onCancel}
          cancelProps={cancelProps}
          maskClosable={maskClosable}
          onVisibleChange={setVisible}
          visible={visible}
        >
          {children}
        </NavBarModal>
      </>
    )
  }
)

export default Combo
