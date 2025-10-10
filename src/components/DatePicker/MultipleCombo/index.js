import React, { forwardRef } from 'react'
import MultipleModal from './../MultipleModal'
import getDisplayValue from './getDisplayValue'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// DatePicker
const MultipleCombo = forwardRef(
  (
    {
      // Combo properties
      separator,

      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      defaultPickerValue,
      onError,

      value,
      allowClear,
      multiple,
      onChange,
      type = 'date',
      min,
      max,
      hourStep,
      minuteStep,
      ...props
    },
    ref
  ) => {
    return (
      <Combo
        ref={ref}
        formatter={() => {
          return getDisplayValue({
            type: type,
            value: value,
            separator: separator
          })
        }}
        {...props}
        value={value}
        allowClear={allowClear}
        multiple={multiple}
        onChange={onChange}
        // Modal
        modalRender={({ modalRef, getComboDOM, visible, onVisibleChange }) => {
          return (
            <MultipleModal
              // 透传属性用于控制显隐, 及暴露modalDOM和getModalDOM
              ref={modalRef}
              getComboDOM={getComboDOM}
              visible={visible}
              onVisibleChange={onVisibleChange}
              // Combo
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onOk={onChange}
              // Modal Props
              portal={portal}
              maskClassName={maskClassName}
              maskStyle={maskStyle}
              className={modalClassName}
              style={modalStyle}
              title={title}
              defaultPickerValue={defaultPickerValue}
              onError={onError}
              type={type}
              min={min}
              max={max}
              hourStep={hourStep}
              minuteStep={minuteStep}
            />
          )
        }}
      />
    )
  }
)

export default MultipleCombo
