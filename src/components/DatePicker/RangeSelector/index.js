import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getTitleByType from './../utils/getTitleByType'
import updateRangeValue from './../RangeMain/updateRangeValue'
import getDisplayValue from '../RangeCombo/getDisplayValue'
import getCustomRangeId from './getCustomRangeId'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
import getDefaultRangeId from './getDefaultRangeId'

import Buttons from './Buttons'
import Dates from './Dates'

// 日期快捷选择
function RangeSelector(
  {
    visible,

    // Main
    value,
    type = 'date', // year | quarter | month | date | time | datetime
    min,
    max,
    hourStep,
    minuteStep,
    disabledStart,
    disabledEnd,
    allowClear,
    onChange,

    rangeId,
    ranges,
    portal,
    selectorProps,
    datePickerModalProps,

    ...props
  },
  ref
) {
  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }

  // 自定义项id
  let customRangeId = getCustomRangeId(ranges)

  // 当前选中项id
  let defaultRangeId = getDefaultRangeId(value, ranges, type)
  let currentRangeId = rangeId ?? defaultRangeId

  const mainRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current,
      getTitle: () => {
        return getTitleByType(type)
      }
    }
  })

  // unify onChange
  function handleChange(newValue, { rangeId }) {
    onChange &&
      onChange(updateRangeValue(newValue, type), {
        rangeId: rangeId || null,
        ranges,
        displayValue: getDisplayValue({ value: newValue, type, rangeId, ranges })
      })
  }

  return (
    <div
      {...props}
      className={`datepicker-rangeselector-selector${props.className ? ' ' + props.className : ''}`}
      ref={mainRef}
    >
      {/* 快捷选择 */}
      <Buttons
        value={value}
        onChange={handleChange}
        rangeId={currentRangeId}
        ranges={ranges}
        selectorProps={selectorProps}
        allowClear={allowClear}
      />

      {/* 自定义区间: 文本框选择 */}
      {customRangeId && currentRangeId === customRangeId && (
        <Dates
          datePickerModalProps={datePickerModalProps}
          portal={portal}
          type={type}
          allowClear={allowClear}
          value={value}
          min={min}
          max={max}
          hourStep={hourStep}
          minuteStep={minuteStep}
          disabledStart={disabledStart}
          disabledEnd={disabledEnd}
          onChange={(newValue) => handleChange(newValue, { rangeId: customRangeId })}
        />
      )}
    </div>
  )
}

export default forwardRef(RangeSelector)
