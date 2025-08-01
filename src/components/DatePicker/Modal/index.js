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
      onBeforeChange,

      // Main
      type,
      min,
      max,
      hourStep,
      minuteStep,
      ...props
    },
    ref
  ) => {
    // 扩展非标准属性
    if (!props.mainProps) {
      props.mainProps = {}
    }
    if (type) props.mainProps.type = type
    if (min) props.mainProps.min = min
    if (max) props.mainProps.max = max
    if (hourStep) props.mainProps.hourStep = hourStep
    if (minuteStep) props.mainProps.minuteStep = minuteStep

    return (
      <SelectModal
        ref={ref}
        {...props}
        main={props?.main || Main}
        onBeforeChange={async (currentValue) => {
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

          // 修改提示
          if (typeof onBeforeChange === 'function') {
            let goOn = await onBeforeChange(currentValue)
            // 只有合法值才需要处理, 其它值概不处理
            if (goOn === false || typeof goOn === 'object') {
              return goOn
            }
          }

          return currentValue
        }}
        value={formatValue(value || defaultPickerValue)}
        className={`picker-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default Modal
