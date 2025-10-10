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
        // Modal
        modalRender={({
          modalRef,
          getComboDOM,
          value,
          allowClear,
          multiple,
          onChange,
          visible,
          onVisibleChange
        }) => {
          return (
            <WeekModal
              ref={modalRef}
              getComboDOM={getComboDOM}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              visible={visible}
              onVisibleChange={onVisibleChange}
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
