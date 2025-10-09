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
      onChange,
      onBeforeChange,
      onRangeIdChange,
      onVisibleChange,

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
        mainRender={({ mainRef, visible, value, allowClear, multiple, onChange: mainOnChange }) => {
          return (
            <RangeMain
              ref={mainRef}
              visible={visible}
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
        onChange={(newValue, newArguments) => {
          let currentValue = updateRangeValue(newValue, type)

          setCurrentRangeId(newArguments?.rangeId || null)
          onRangeIdChange && onRangeIdChange(newArguments?.rangeId || null)

          onChange && onChange(currentValue, { rangeId: newArguments?.rangeId || null })
        }}
        onBeforeChange={async (newValue, newArguments) => {
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

          // 修改提示
          if (typeof onBeforeChange === 'function') {
            let goOn = await onBeforeChange(currentValue, {
              rangeId: newArguments?.rangeId,
              ranges: ranges
            })
            // 只有合法值才需要处理, 其它值概不处理
            if (goOn === false || typeof goOn === 'object') {
              return goOn
            }
          }

          return currentValue
        }}
        onVisibleChange={onVisibleChange}
        value={formatValue(value || defaultPickerValue)}
        className={`picker-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default RangeModal
