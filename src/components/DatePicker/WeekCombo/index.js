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
        formatter={() => {
          return DateUtil.format(value, 'week')
        }}
        {...props}
        value={value}
        allowClear={allowClear}
        multiple={multiple}
        onChange={onChange}
        // Modal
        modalRender={({ modalRef, getComboDOM, open, onClose }) => {
          return (
            <WeekModal
              // 透传属性用于控制显隐, 及暴露modalDOM和getModalDOM
              ref={modalRef}
              getComboDOM={getComboDOM}
              open={open}
              onClose={onClose}
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
            />
          )
        }}
      />
    )
  }
)

export default WeekCombo
