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
      titleRender,
      arrowRender = () => <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>,

      // Button Style
      color = 'default',
      variant = 'text',
      shape,
      comboStyle,
      comboClassName,

      // Mask
      maskClassName,
      maskStyle,
      children,

      // Modal
      portal,
      offset = {
        top: 6
      },
      left,
      right,

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

    // 获取标题节点
    function getTitleNode(visible) {
      if (typeof titleRender === 'function') {
        return titleRender({
          className: 'toolbar-dropdown-combo-title',
          visible: visible
        })
      }
      return <span className="toolbar-dropdown-combo-title">{title}</span>
    }

    // 获取箭头节点
    function getArrowNode(visible) {
      if (typeof arrowRender === 'function') {
        return arrowRender({ visible: visible })
      }
      return <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>
    }

    // 获取Combo节点
    function getComboNode({ comboRef, onClick }) {
      return (
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
          {getTitleNode(visible)}
          {getArrowNode(visible)}
        </Button>
      )
    }

    return (
      <Modal.DropdownCombo
        ref={dropdownRef}
        portal={portal}
        offset={offset}
        left={left}
        right={right}
        // Combo
        comboRender={getComboNode}
        // Modal
        maskClassName={DOMUtil.classNames('toolbar-dropdown-mask', maskClassName)}
        maskStyle={maskStyle}
        modalClassName="toolbar-dropdown-modal"
        onOpen={() => {
          setVisible(true)
          closeAllDropdown({ visibleRef: dropdownRef })
          onOpen && onOpen()
        }}
        onClose={() => {
          setVisible(false)
          onClose && onClose()
        }}
      >
        {children}
      </Modal.DropdownCombo>
    )
  }
)

// Component Name, for compact
Dropdown.componentName = 'ToolBar.Dropdown'

export default Dropdown
