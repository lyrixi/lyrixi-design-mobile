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
      mainRender,

      onBeforeOpen,
      onOpen,
      onClose
    },
    ref
  ) => {
    const comboRef = useRef(null)
    const [open, setOpen] = useState(false)

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
      if (open === null) return
      if (open) {
        onOpen && onOpen()
      } else {
        onClose && onClose()
      }

      // eslint-disable-next-line
    }, [open])

    function _close() {
      setOpen(false)
    }

    function _open() {
      setOpen(true)
    }

    async function handleClick(e) {
      let newOpen = !open
      if (!newOpen) {
        setOpen(newOpen)
        return
      }

      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      setOpen(newOpen)
    }

    // 获取Combo节点
    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          open,
          style: comboStyle,
          className: DOMUtil.classNames(
            'modal-dropdown-combo',
            open ? 'expand' : '',
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
            open ? 'expand' : '',
            comboClassName
          )}
          onClick={handleClick}
        >
          {comboChildren}
        </div>
      )
    }
    const ComboNode = getComboNode()

    console.log('ComboNode', ComboNode)
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
            setOpen(false)
          }}
          open={open}
        >
          {typeof mainRender === 'function' && mainRender({ open: _open, close: _close })}
        </DropdownModal>
      </>
    )
  }
)

export default Combo
