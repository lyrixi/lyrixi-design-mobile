import React, { forwardRef } from 'react'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Main: common
      value,

      list,
      ...props
    },
    ref
  ) => {
    return (
      <SelectModal
        ref={ref}
        {...props}
        mainRender={({ mainRef, visible, value, allowClear, multiple, onChange }) => {
          return (
            <Main
              ref={mainRef}
              visible={visible}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              list={list}
            />
          )
        }}
        className={`transfer-modal${props.className ? ' ' + props.className : ''}`}
        value={formatValue(value)}
      />
    )
  }
)

export default Modal
