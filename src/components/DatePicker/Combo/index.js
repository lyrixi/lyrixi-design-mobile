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

      defaultPickerValue,
      onError,

      value,
      allowClear,
      multiple,
      onChange,
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
        allowClear={allowClear}
        multiple={multiple}
        onChange={onChange}
        // Modal
        modalRender={({ modalRef, getComboDOM, visible, onVisibleChange }) => {
          return (
            <Modal
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
