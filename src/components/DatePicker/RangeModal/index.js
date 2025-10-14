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
      open,
      onClose,
      onOpen,
      value,
      allowClear,
      multiple,
      onChange,
      defaultPickerValue,
      onError,

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

    const [currentValue, setCurrentValue] = useState(value)
    const [currentRangeId, setCurrentRangeId] = useState(rangeId)
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef.current,
        ...mainRef.current
      }
    })

    // 同步外部value到内部currentValue
    React.useEffect(() => {
      if (open) {
        setCurrentValue(formatValue(value || defaultPickerValue))
        setCurrentRangeId(rangeId)
      }
    }, [open, value, defaultPickerValue, rangeId])

    async function handleOk() {
      // 校验
      let validatedValue = updateRangeValue(currentValue, type)

      validatedValue = validateRange(validatedValue, {
        type: type,
        min: min,
        max: max,
        diff: diff,
        onError: onError
      })

      if (validatedValue === false) return

      // 触发 onChange
      if (onChange) {
        let goOn = await onChange(validatedValue, { rangeId: currentRangeId, ranges })
        if (goOn === false) return
      }
      onClose && onClose()
    }

    function handleChange(newValue, { rangeId: newRangeId } = {}) {
      setCurrentValue(newValue)
      setCurrentRangeId(newRangeId)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue, { rangeId: newRangeId, ranges })
        }
        onClose && onClose()
      }
    }

    return (
      <SelectModal
        ref={modalRef}
        {...props}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
        ok={multiple !== false}
        className={`picker-modal${props.className ? ' ' + props.className : ''}`}
      >
        <RangeMain
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
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
      </SelectModal>
    )
  }
)

export default RangeModal
