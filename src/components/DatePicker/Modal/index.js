import React, { forwardRef } from 'react'
import validateMaxMin from '../utils/validateMaxMin'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal as BaseModal } from 'lyrixi-design-mobile'
const SelectModal = BaseModal.SelectModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Modal
      value,
      defaultPickerValue,
      onError,
      onOk,

      // Main
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
              type={type}
              min={min}
              max={max}
              hourStep={hourStep}
              minuteStep={minuteStep}
            />
          )
        }}
        onOk={async (currentValue) => {
          // 校验
          if ((min || max) && currentValue) {
            let newValue = validateMaxMin(currentValue, {
              type: type,
              min: min,
              max: max,
              onError: onError
            })

            if (newValue === false) return false

            // eslint-disable-next-line
            currentValue = newValue
          }

          // 触发 onOk
          if (onOk) {
            let goOn = await onOk(currentValue)
            return goOn
          }
        }}
        value={formatValue(value || defaultPickerValue)}
        className={`picker-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default Modal
