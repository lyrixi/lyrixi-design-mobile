import React, { forwardRef } from 'react'
import validateMaxMin from '../utils/validateMaxMin'
import formatValue from './../MultipleMain/formatValue'
import MultipleMain from './../MultipleMain'

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
      onChange,

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
        mainRender={({ mainRef, visible, value, allowClear, multiple, onChange }) => {
          return (
            <MultipleMain
              ref={mainRef}
              visible={visible}
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
        onChange={async (currentValue) => {
          // 校验
          if (min || max) {
            // 校验值是否合法
            for (let tab of currentValue) {
              let newValue = validateMaxMin(tab.value, {
                type: type,
                min: min,
                max: max,
                onError: onError
              })

              if (newValue === false) return false
              tab.value = newValue
            }
          }

          // 触发 onChange
          if (onChange) {
            let goOn = await onChange(currentValue)
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
