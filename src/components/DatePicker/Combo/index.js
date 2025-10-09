import React, { forwardRef } from 'react'

import Modal from './../Modal'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Modal as BaseModal } from 'lyrixi-design-mobile'
const Combo = BaseModal.SelectCombo
测试使用-end */

// DatePicker
const DatePickerCombo = forwardRef(
  (
    {
      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,
      onBeforeChecked,

      defaultPickerValue,
      onError,

      value,
      type = 'date', // year | quarter | month | date | time | datetime | week
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
          return DateUtil.format(value, type)
        }}
        {...props}
        value={value}
        // Modal
        modalRender={(modalProps) => {
          return (
            <Modal
              {...modalProps}
              portal={portal}
              maskClassName={maskClassName}
              maskStyle={maskStyle}
              className={modalClassName}
              style={modalStyle}
              title={title}
              onBeforeChecked={onBeforeChecked}
              hourStep={hourStep}
              minuteStep={minuteStep}
              defaultPickerValue={defaultPickerValue}
              onError={onError}
              type={type}
              min={min}
              max={max}
            />
          )
        }}
      />
    )
  }
)

export default DatePickerCombo
