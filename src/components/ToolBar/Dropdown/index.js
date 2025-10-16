import React, { useImperativeHandle, useRef, useEffect, useState, forwardRef } from 'react'
import closeAllDropdown from './../utils/closeAllDropdown'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import DropdownModal from './../../Modal/DropdownModal'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal, Button } from 'lyrixi-design-mobile'
const DropdownModal = Modal.DropdownModal
测试使用-end */

const Dropdown = forwardRef(
  (
    {
      // Style
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      comboStyle,
      comboClassName,

      // Combo
      title = '',
      titleRender,
      arrowRender = () => <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>,

      // Button Style
      color = 'default',
      variant = 'text',
      shape,

      // Mask

      children,

      // Modal
      portal,
      offset = {
        top: 6
      },
      left,
      right,

      onBeforeOpen,
      onClose,
      onOpen
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const comboRef = useRef(null)

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

    // 将所有dropdown合并到一个数组里, 用于全量关闭
    useEffect(() => {
      if (!window.dropdownRefs) window.dropdownRefs = []
      window.dropdownRefs.push(ref)
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (open === null) return
      if (open) {
        closeAllDropdown({ visibleRef: ref })
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

    // 获取标题节点
    function getTitleNode(open) {
      if (typeof titleRender === 'function') {
        return titleRender({
          className: 'toolbar-dropdown-combo-title',
          open: open
        })
      }
      return <span className="toolbar-dropdown-combo-title">{title}</span>
    }

    // 获取箭头节点
    function getArrowNode(open) {
      if (typeof arrowRender === 'function') {
        return arrowRender({ open: open })
      }
      return <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>
    }

    return (
      <>
        {/* Combo */}
        <Button
          ref={comboRef}
          color={color}
          variant={variant}
          size="s"
          radius="s"
          shape={shape}
          className={DOMUtil.classNames(
            'toolbar-dropdown-combo toolbar-button',
            comboClassName,
            open ? 'expand' : ''
          )}
          style={comboStyle}
          onClick={handleClick}
        >
          {getTitleNode(open)}
          {getArrowNode(open)}
        </Button>

        {/* Modal */}
        <DropdownModal
          modalClassName={DOMUtil.classNames('toolbar-dropdown-modal', modalClassName)}
          modalStyle={modalStyle}
          maskClassName={DOMUtil.classNames('toolbar-dropdown-mask', maskClassName)}
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
          {children}
        </DropdownModal>
      </>
    )
  }
)

// Component Name, for compact
Dropdown.componentName = 'ToolBar.Dropdown'

export default Dropdown
