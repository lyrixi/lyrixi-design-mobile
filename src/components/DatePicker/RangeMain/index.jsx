import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import getTitleByType from './../utils/getTitleByType'
import updateRangeValue from './updateRangeValue'
import getDisplayValue from '../RangeCombo/getDisplayValue'
import SelectorMain from './SelectorMain'
import getDefaultRanges from './getDefaultRanges'
import PickerMain from './PickerMain'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 日期快捷选择
function RangeMain(
  {
    open,

    separator,

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
    titles,
    portal,

    ...props
  },
  ref
) {
  // 默认分割符
  if (separator === undefined) {
    // eslint-disable-next-line
    separator = LocaleUtil.locale('至', 'SeedsUI_to')
  }
  // 默认标题
  if (titles === undefined) {
    // eslint-disable-next-line
    titles = {
      selector: LocaleUtil.locale('快捷选择', 'SeedsUI_date_range_selector_title'),
      custom: LocaleUtil.locale('自定义', 'SeedsUI_custom')
    }
  }

  const selectorRef = useRef(null)
  const rangeMainRef = useRef(null)

  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }

  // 判断有没有快捷选择
  let hasSelector = false
  if (ranges) {
    for (let key in ranges) {
      if (Array.isArray(ranges[key])) {
        hasSelector = true
      }
    }
  }

  useImperativeHandle(ref, () => {
    return {
      ...rangeMainRef.current,
      getTitle: () => {
        return getTitleByType(type)
      }
    }
  })

  // unify onChange
  function handleChange(newValue, { rangeId } = {}) {
    onChange &&
      onChange(updateRangeValue(newValue, type), {
        rangeId: rangeId || null,
        ranges,
        displayValue: getDisplayValue({ value: newValue, type, rangeId, ranges, separator })
      })
  }

  return (
    <>
      {/* 快捷选择: 标题 */}
      {hasSelector && typeof titles?.selector === 'string' ? (
        <p className="datepicker-rangemain-selector-title selector">{titles.selector}</p>
      ) : null}

      {hasSelector && (
        <SelectorMain
          ref={selectorRef}
          value={value}
          allowClear={allowClear}
          onChange={handleChange}
          rangeId={rangeId}
          ranges={ranges}
        />
      )}

      {/* 自定义 */}
      {hasSelector && typeof titles?.custom === 'string' ? (
        <p className="datepicker-rangemain-selector-title custom">{titles.custom}</p>
      ) : null}
      <PickerMain
        ref={rangeMainRef}
        portal={portal}
        separator={separator}
        type={type}
        min={min}
        max={max}
        hourStep={hourStep}
        minuteStep={minuteStep}
        disabledStart={disabledStart}
        disabledEnd={disabledEnd}
        allowClear={allowClear}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </>
  )
}

export default forwardRef(RangeMain)
