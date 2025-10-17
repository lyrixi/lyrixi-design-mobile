import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import validateMaxMin from '../utils/validateMaxMin'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal as BaseModal } from 'lyrixi-design-mobile'
const NavBarModal = BaseModal.NavBarModal
测试使用-end */

// Modal
const Modal = forwardRef(
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

      modalClassName,
      modalStyle,

      // Main
      type = 'date',
      min,
      max,
      hourStep,
      minuteStep,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(value)
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
      }
    }, [open, value, defaultPickerValue])

    async function handleOk() {
      let validatedValue = currentValue
      // 校验
      if ((min || max) && validatedValue) {
        let newValue = validateMaxMin(validatedValue, {
          type: type,
          min: min,
          max: max,
          onError: onError
        })

        if (newValue === false) return

        validatedValue = newValue
      }

      // 触发 onChange
      if (onChange) {
        let goOn = await onChange(validatedValue)
        if (goOn === false) return
      }
      onClose && onClose()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue)
        }
        onClose && onClose()
      }
    }

    return (
      <NavBarModal
        ref={modalRef}
        {...props}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
        ok={multiple !== false}
        modalClassName={DOMUtil.classNames('picker-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        <Main
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
        />
      </NavBarModal>
    )
  }
)

export default Modal
