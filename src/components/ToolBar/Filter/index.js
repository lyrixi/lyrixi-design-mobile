import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import FilterModal from './../../Modal/FilterModal'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal, Button } from 'lyrixi-design-mobile'
const FilterModal = Modal.FilterModal
测试使用-end */

const Filter = forwardRef(
  (
    {
      // Button Style
      color = 'default',
      variant = 'text',
      shape,
      comboStyle,
      comboClassName,

      // Content
      iconRender,

      // Modal
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      onCancel,
      footerRender,
      onOpen, onClose,
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const [visible, setVisible] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    useEffect(() => {
      // 初始化不回调onOpen/onClose
      if (!rootRef.current.isNotFirstVisible) {
        rootRef.current.isNotFirstVisible = true
        return
      }

      if (visible) {
        onOpen && onOpen()
      } else {
        onClose && onClose()
      }
      // eslint-disable-next-line
    }, [visible])

    // 获取图标节点
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender({ className: 'toolbar-button-icon' })
      }
      return <div className={'toolbar-button-icon toolbar-button-icon-filter'}></div>
    }
    const IconNode = getIconNode()

    return (
      <>
        {/* Combo */}
        <Button
          color={color}
          variant={variant}
          size="s"
          radius="s"
          shape={shape}
          className={DOMUtil.classNames('toolbar-button', comboClassName)}
          style={comboStyle}
          onClick={() => {
            setVisible(true)
          }}
          ref={rootRef}
        >
          {IconNode}
        </Button>

        {/* Modal */}
        <FilterModal
          onCancel={onCancel}
          footerRender={footerRender}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          style={{
            className: modalClassName,
            style: modalStyle
          }}
          onOpen={() => setVisible(true)}
          onClose={() => setVisible(false)}
          open={visible}
        >
          {children}
        </FilterModal>
      </>
    )
  }
)

// Component Name, for compact
Filter.componentName = 'ToolBar.Filter'

export default Filter
