import React, { forwardRef } from 'react'

import WeekModal from './../WeekModal'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// 获取周
const WeekCombo = forwardRef(
  (
    {
      // Modal
      modalClassName,
      modalStyle,

      defaultPickerValue,
      onError,

      value,
      type,
      min,
      max,
      ...props
    },
    ref
  ) => {
    return (
      <Combo
        ref={ref}
        displayValueFormatter={() => {
          return DateUtil.format(value, 'week')
        }}
        {...props}
        // Modal
        value={value}
        modal={props?.modal || WeekModal}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        defaultPickerValue={defaultPickerValue}
        onError={onError}
        type={type}
        min={min}
        max={max}
      />
    )
  }
)

export default WeekCombo
