import React, { forwardRef } from 'react'
import validateMaxMin from './../utils/validateMaxMin'
import formatValue from './formatValue'
import WeekMain from './../WeekMain'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// WeekModal
const WeekModal = forwardRef(
  (
    {
      // Modal
      value,
      defaultPickerValue,
      onError,

      // Main
      min,
      max,
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
            <WeekMain
              ref={mainRef}
              visible={visible}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              min={min}
              max={max}
            />
          )
        }}
        onChange={async (currentValue) => {
          // 校验
          if ((min || max) && currentValue) {
            let newValue = validateMaxMin(currentValue, {
              type: 'week',
              min: min,
              max: max,
              onError: onError
            })

            if (newValue === false) return false

            // eslint-disable-next-line
            currentValue = newValue
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

export default WeekModal
