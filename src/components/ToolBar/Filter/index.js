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
      icon,

      // Modal
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      onCancel,
      footer,
      onVisibleChange,
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
      // 初始化不回调onVisibleChange
      if (!rootRef.current.isNotFirstVisible) {
        rootRef.current.isNotFirstVisible = true
        return
      }

      onVisibleChange && onVisibleChange(visible)
      // eslint-disable-next-line
    }, [visible])

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
          {icon ? (
            DOMUtil.getIconNode(icon, {
              className: 'toolbar-button-icon'
            })
          ) : (
            <div className={'toolbar-button-icon toolbar-button-icon-filter'}></div>
          )}
        </Button>

        {/* Modal */}
        <FilterModal
          onCancel={onCancel}
          footer={footer}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          style={{
            className: modalClassName,
            style: modalStyle
          }}
          onVisibleChange={setVisible}
          visible={visible}
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
