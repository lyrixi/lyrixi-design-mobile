import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
import updateRangeValue from './../RangeMain/updateRangeValue'
import formatValue from './../RangeMain/formatValue'
import validateRange from './validateRange'
import RangeMain from './../RangeMain'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// RangeModal
const RangeModal = forwardRef(
  (
    {
      // Modal
      value,
      defaultPickerValue,
      onError,
      onOk,

      // Main
      type = 'date',
      diff,
      min,
      max,
      hourStep,
      minuteStep,
      disabledStart,
      disabledEnd,
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

    const modalRef = useRef(null)
    // 当前选中项
    let [currentRangeId, setCurrentRangeId] = useState(rangeId)

    useImperativeHandle(ref, () => {
      return modalRef.current
    })

    return (
      <SelectModal
        ref={modalRef}
        {...props}
        mainRender={({ mainRef, open, value, allowClear, multiple, onChange: mainOnChange }) => {
          return (
            <RangeMain
              ref={mainRef}
              visible={open}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={(newValue, { rangeId: newRangeId } = {}) => {
                setCurrentRangeId(newRangeId)
                mainOnChange(newValue, { rangeId: newRangeId })
              }}
              type={type}
              min={min}
              max={max}
              hourStep={hourStep}
              minuteStep={minuteStep}
              disabledStart={disabledStart}
              disabledEnd={disabledEnd}
              titles={titles}
              ranges={ranges}
              portal={modalRef?.current?.rootDOM}
              rangeId={currentRangeId}
            />
          )
        }}
        onOk={async (newValue, newArguments) => {
          // 校验
          let currentValue = updateRangeValue(newValue, type)

          currentValue = validateRange(currentValue, {
            type: type,
            min: min,
            max: max,
            diff: diff,
            onError: onError
          })

          if (currentValue === false) return false

          // 触发 onOk
          if (onOk) {
            let goOn = await onOk(currentValue, { rangeId: newArguments?.rangeId || null })
            return goOn
          }

          setCurrentRangeId(newArguments?.rangeId || null)
        }}
        value={formatValue(value || defaultPickerValue)}
        className={`picker-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default RangeModal
