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

    // 扩展非标准属性
    if (!props.mainProps) {
      props.mainProps = {}
    }
    if (type) props.mainProps.type = type
    if (min) props.mainProps.min = min
    if (max) props.mainProps.max = max
    if (hourStep) props.mainProps.hourStep = hourStep
    if (minuteStep) props.mainProps.minuteStep = minuteStep
    if (disabledStart) props.mainProps.disabledStart = disabledStart
    if (disabledEnd) props.mainProps.disabledEnd = disabledEnd
    if (titles) props.mainProps.titles = titles

    props.mainProps.ranges = ranges
    props.mainProps.portal = modalRef?.current?.rootDOM
    props.mainProps.rangeId = currentRangeId
    props.mainProps.onChange = (newValue, { rangeId: newRangeId } = {}) => {
      setCurrentRangeId(newRangeId)
    }

    useImperativeHandle(ref, () => {
      return modalRef.current
    })

    // 子级DatePicker的zIndex必须大于父级
    if (typeof props?.maskStyle?.zIndex === 'number') {
      if (!props.mainProps.datePickerModalProps) props.mainProps.datePickerModalProps = {}
      if (!props.mainProps.datePickerModalProps.maskStyle)
        props.mainProps.datePickerModalProps.maskStyle = {}
      props.mainProps.datePickerModalProps.maskStyle.zIndex = props.maskStyle.zIndex + 1
    }

    return (
      <SelectModal
        ref={modalRef}
        {...props}
        main={props?.main || RangeMain}
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
