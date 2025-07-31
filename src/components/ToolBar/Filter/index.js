import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import FilterModal from './../../Modal/FilterModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-design-mobile'
const FilterModal = Modal.FilterModal
测试使用-end */

const Filter = forwardRef(
  (
    {
      icon,
      active,
      onCancel,
      onOk,
      onReset,
      onConfig,
      buttons,
      onVisibleChange,
      modalProps,
      children,
      ...props
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
        <div
          {...props}
          className={DOMUtil.classNames('toolbar-filter', props.className, active ? 'active' : '')}
          onClick={() => {
            setVisible(true)
          }}
          ref={rootRef}
        >
          {icon ? (
            DOMUtil.getIconNode(icon, {
              className: 'toolbar-icon toolbar-filter-icon'
            })
          ) : (
            <div className={'toolbar-icon toolbar-filter-icon default'}></div>
          )}
        </div>

        {/* Modal */}
        <FilterModal
          onCancel={onCancel}
          onOk={onOk}
          onReset={onReset}
          onConfig={onConfig}
          buttons={buttons}
          {...modalProps}
          onVisibleChange={setVisible}
          visible={visible}
        >
          {children}
        </FilterModal>
      </>
    )
  }
)

export default Filter
