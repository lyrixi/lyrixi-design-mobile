import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import DropdownModal from './../DropdownModal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Combo = forwardRef(
  (
    {
      // Combo
      comboRender, // 传入comboRender
      comboChildren,
      comboStyle,
      comboClassName,

      // Modal
      portal,
      offset,
      left,
      right,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      modal,
      children,

      onVisibleChange,
      onBeforeOpen,
      onOpen,
      onClose
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const [visible, setVisible] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current?.rootDOM ? comboRef.current.rootDOM : comboRef.current,
        getComboDOM: () =>
          comboRef.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
        close: _close,
        open: _open
      }
    })

    useEffect(() => {
      if (visible === null) return
      typeof onVisibleChange === 'function' && onVisibleChange(visible)

      // eslint-disable-next-line
    }, [visible])

    function _close() {
      setVisible(false)
    }

    function _open() {
      setVisible(true)
    }

    async function handleClick(e) {
      let newVisible = !visible
      if (!newVisible) {
        onClose && onClose()
        setVisible(newVisible)
        return
      }

      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      setVisible(newVisible)
      onOpen && onOpen()
    }

    // 获取Combo节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          visible,
          style: comboStyle,
          className: DOMUtil.classNames(
            'modal-dropdown-combo',
            visible ? 'expand' : '',
            comboClassName
          ),
          onClick: handleClick
        })
      }

      // 默认渲染 comboChildren
      return (
        <div
          ref={comboRef}
          style={comboStyle}
          className={DOMUtil.classNames(
            'modal-dropdown-combo',
            visible ? 'expand' : '',
            comboClassName
          )}
          onClick={handleClick}
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
        <DropdownModal
          modalClassName={modalClassName}
          modalStyle={modalStyle}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          offset={offset}
          left={left}
          right={right}
          referenceDOM={comboRef.current?.rootDOM ? comboRef.current.rootDOM : comboRef.current}
          portal={portal}
          onClose={() => {
            setVisible(false)
            onClose && onClose()
          }}
          visible={visible}
        >
          {children}
          {typeof modal === 'function' && modal({ open: _open, close: _close })}
        </DropdownModal>
      </>
    )
  }
)

export default Combo
