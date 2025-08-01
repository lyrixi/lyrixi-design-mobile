import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Combo from './../../WeekCombo'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Input } from 'lyrixi-design-mobile'
测试使用-end */

// 周选择
const Week = forwardRef(
  (
    {
      min,
      max,
      value,

      onError,
      onChange,

      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    // 显示文本
    let displayValue = DateUtil.format(value, 'week')

    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef?.current,
        getRootDOM: () => rootRef?.current,
        // 显示文本
        displayValue: displayValue,
        getDisplayValue: () => {
          return DateUtil.format(value, 'week')
        }
      }
    })

    // 向前
    function handlePrev(e) {
      if (value instanceof Date === false) return
      onChange && onChange(DateUtil.previousWeek(value))
    }

    // 向后
    function handleNext(e) {
      if (value instanceof Date === false) return
      onChange && onChange(DateUtil.nextWeek(value))
    }

    return (
      <>
        <Input.IconLeftArrow className="datepicker-types-previous" onClick={handlePrev} />
        <Combo
          {...props}
          value={value}
          className={`datepicker-types-date${className ? ' ' + className : ''}`}
          onChange={(newValue) => {
            onChange && onChange(newValue)
          }}
        >
          <p>{displayValue || ''}</p>
        </Combo>
        <Input.IconRightArrow className="datepicker-types-next" onClick={handleNext} />
      </>
    )
  }
)

export default Week
