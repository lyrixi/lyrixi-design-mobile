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
      modalClassName,
      modalStyle,

      defaultPickerValue,
      onError,

      value,
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
        // Modal
        modalRender={(modalProps) => {
          const ModalComponent = MultipleModal
          return (
            <ModalComponent
              {...modalProps}
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
        value={value}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
      />
    )
  }
)

export default MultipleCombo
