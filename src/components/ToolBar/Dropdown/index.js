import React, { useImperativeHandle, useRef, useEffect, useState, forwardRef } from 'react'
import closeAllDropdown from './../utils/closeAllDropdown'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Modal from './../../Modal'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal, Button } from 'lyrixi-design-mobile'
测试使用-end */

const Dropdown = forwardRef(
  (
    {
      // Combo
      title = '',
      arrow = <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>,

      // Button Style
      color = 'default',
      variant = 'text',
      shape,
      comboStyle,
      comboClassName,

      // Mask
      maskClassName,
      maskStyle,
      modal,

      // Modal
      portal,
      offset = {
        top: 6
      },
      left,
      right,
      children,

      onClose,
      onOpen
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false)

    const dropdownRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return dropdownRef.current
    })

    // 将所有dropdown合并到一个数组里, 用于全量关闭
    useEffect(() => {
      if (!window.dropdownRefs) window.dropdownRefs = []
      window.dropdownRefs.push(dropdownRef)
      // eslint-disable-next-line
    }, [])

    return (
      <Modal.DropdownCombo
        ref={dropdownRef}
        portal={portal}
        offset={offset}
        left={left}
        right={right}
        // Combo
        combo={({ comboRef, onClick }) => (
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
              visible ? 'expand' : ''
            )}
            style={comboStyle}
            onClick={onClick}
          >
            {DOMUtil.getTextNode(title, {
              className: 'toolbar-dropdown-combo-title',
              active: visible
            })}
            {DOMUtil.getIconNode(arrow, { active: visible })}
          </Button>
        )}
        // Modal
        maskClassName={DOMUtil.classNames('toolbar-dropdown-mask', maskClassName)}
        maskStyle={maskStyle}
        modal={modal}
        modalClassName="toolbar-dropdown-modal"
        onOpen={() => {
          closeAllDropdown({ visibleRef: dropdownRef })
          onOpen && onOpen()
        }}
        onClose={() => {
          onClose && onClose()
        }}
        onVisibleChange={setVisible}
      >
        {children}
      </Modal.DropdownCombo>
    )
  }
)

// Component Name, for compact
Dropdown.componentName = 'ToolBar.Dropdown'

export default Dropdown
