import React, { useImperativeHandle, useRef, forwardRef, useState, useEffect } from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Modal from './../../../Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-design-mobile'
测试使用-end */

const Combo = forwardRef(
  (
    {
      // Modal
      portal,
      offset,
      maskProps,
      // Title
      title = '',
      arrow = <i className="toolbar-list-combo-arrow"></i>,
      onBeforeOpen,
      onVisibleChange,
      children,
      ...props
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current,
        getComboDOM: () => comboRef.current,
        modalDOM: modalRef?.current?.modalDOM,
        getModalDOM: modalRef?.current?.getRootDOM,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    // 控制Modal显隐
    const [visible, setVisible] = useState(null)

    useEffect(() => {
      if (visible === null) return
      typeof onVisibleChange === 'function' && onVisibleChange(visible)
      // eslint-disable-next-line
    }, [visible])

    async function handleClick(e) {
      if (!visible && typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      setVisible(!visible)
    }

    return (
      <>
        <div
          ref={comboRef}
          {...props}
          className={`toolbar-list-combo${visible ? ' active' : ''}${
            props?.className ? ' ' + props.className : ''
          }`}
          onClick={handleClick}
        >
          {DOMUtil.getTextNode(title, { className: 'toolbar-list-combo-title', active: visible })}
          {DOMUtil.getIconNode(arrow, { active: visible })}
        </div>
        <Modal
          ref={modalRef}
          portal={portal}
          referenceDOM={comboRef.current}
          maskProps={maskProps}
          offset={offset}
          visible={visible}
          animation="slideDown"
          className="toolbar-list-modal"
          onVisibleChange={setVisible}
        >
          {children}
        </Modal>
      </>
    )
  }
)

export default Combo
