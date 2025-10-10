import React, { forwardRef, useRef } from 'react'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
import getDisplayValue from './getDisplayValue'
import formatValue from './../RangeMain/formatValue'
import RangeModal from './../RangeModal'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// 日期区间
const RangeCombo = forwardRef(
  (
    {
      // Combo properties
      format,
      separator,

      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      // Modal properties
      diff,
      defaultPickerValue,
      onError,

      value,
      type = 'date',
      min,
      max,
      hourStep,
      minuteStep,
      disabledStart,
      disabledEnd,
      onChange,

      rangeId,
      ranges,
      titles,
      ...props
    },
    ref
  ) => {
    if (ranges === undefined) {
      // eslint-disable-next-line
      ranges = getDefaultRanges()
    }
    const rangeIdRef = useRef(rangeId)

    const handleChange = (newValue, { rangeId: newRangeId, ranges } = {}) => {
      // 清空时需要记录空选中项
      rangeIdRef.current = newRangeId
      onChange && onChange(newValue, { rangeId: newRangeId, ranges })
    }

    return (
      <Combo
        ref={ref}
        separator={separator}
        // 用于回显displayValue
        formatter={() => {
          return getDisplayValue({
            value: formatValue(value),
            type: format || type,
            rangeId: rangeIdRef.current,
            ranges,
            separator
          })
        }}
        className="datepicker-rangecombo"
        {...props}
        // Modal
        value={formatValue(value)}
        onChange={handleChange}
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
            <RangeModal
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
              type={type}
              diff={diff}
              onError={onError}
              min={min}
              max={max}
              hourStep={hourStep}
              minuteStep={minuteStep}
              disabledStart={disabledStart}
              disabledEnd={disabledEnd}
              rangeId={rangeIdRef.current}
              ranges={ranges}
              titles={titles}
            />
          )
        }}
      />
    )
  }
)

export default RangeCombo
