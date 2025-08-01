import React, { forwardRef, useRef, useEffect, useImperativeHandle, useState } from 'react'
import MultipleMain from './../MultipleMain'

// 内库使用-start
import LocaleUtil from '../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 日期区间弹窗
const PickerMain = function (
  {
    portal,
    separator,
    type,
    min,
    max,
    disabledStart,
    disabledEnd,
    allowClear,
    value,
    onChange,
    ...props
  },
  ref
) {
  const mainRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current,
      getValue: () => {
        let multipleValue = mainRef?.current?.getValue?.()
        if (!multipleValue) {
          return null
        }
        let newValue = [multipleValue?.[0].value, multipleValue?.[1].value]
        return newValue
      }
    }
  })

  const [multipleDate, setMultipleDate] = useState(null)
  useEffect(() => {
    const [startDate, endDate] = value || [null, null]

    setMultipleDate([
      {
        id: 'start',
        description: LocaleUtil.locale('开始时间', 'SeedsUI_start_time'),
        value: startDate
      },
      {
        id: 'end',
        description: LocaleUtil.locale('结束时间', 'SeedsUI_end_time'),
        value: endDate
      }
    ])
  }, [value]) // eslint-disable-line

  function handleChange(newMultipleDate) {
    let newValue = [newMultipleDate[0].value, newMultipleDate[1].value]
    onChange && onChange(newValue)
  }

  // 未构建完成Tabs不渲染
  if (!multipleDate) {
    return null
  }

  return (
    <MultipleMain
      ref={mainRef}
      portal={portal}
      separator={separator}
      type={type}
      value={multipleDate.map((item) => {
        if (item.id === 'start' && disabledStart) {
          item.disabled = true
        } else if (item.id === 'end' && disabledEnd) {
          item.disabled = true
        }
        return item
      })}
      min={type === 'week' ? min : undefined}
      max={type === 'week' ? max : undefined}
      allowClear={allowClear}
      onChange={handleChange}
      {...props}
    />
  )
}

export default forwardRef(PickerMain)
