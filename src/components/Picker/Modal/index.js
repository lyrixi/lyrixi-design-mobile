import React, { forwardRef } from 'react'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import SelectModal from './../../../components/Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Modal
      value,
      defaultPickerValue,

      // Main
      list,
      ...props
    },
    ref
  ) => {
    return (
      <SelectModal
        ref={ref}
        {...props}
        mainRender={({ mainRef, open, value, allowClear, multiple, onChange }) => {
          return (
            <Main
              ref={mainRef}
              visible={open}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              list={list}
            />
          )
        }}
        value={formatValue(value || defaultPickerValue)}
        className={`picker-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default Modal
