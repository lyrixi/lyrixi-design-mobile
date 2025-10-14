import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'

import Modal from './../Modal'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import NavBarCombo from './../../Modal/NavBarCombo'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Modal as BaseModal } from 'lyrixi-design-mobile'
const NavBarCombo = BaseModal.NavBarCombo
测试使用-end */

// DatePicker
const DatePickerCombo = forwardRef(
  (
    {
      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      defaultPickerValue,
      onError,

      value,
      allowClear,
      multiple,
      onChange,
      type = 'date', // year | quarter | month | date | time | datetime | week
      min,
      max,
      hourStep,
      minuteStep,

      // Combo props
      onBeforeOpen,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const comboRef = useRef(null)
    const modalRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        ...modalRef.current,
        close: () => setOpen(false),
        open: () => setOpen(true)
      }
    })

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      setOpen(true)
    }

    function handleClose() {
      setOpen(false)
    }

    return (
      <>
        <NavBarCombo
          ref={comboRef}
          formatter={() => {
            return DateUtil.format(value, type)
          }}
          {...props}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={onChange}
          onClick={handleOpen}
        />
        <Modal
          ref={modalRef}
          open={open}
          onClose={handleClose}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={onChange}
          portal={portal}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          className={modalClassName}
          style={modalStyle}
          title={title}
          hourStep={hourStep}
          minuteStep={minuteStep}
          defaultPickerValue={defaultPickerValue}
          onError={onError}
          type={type}
          min={min}
          max={max}
        />
      </>
    )
  }
)

export default DatePickerCombo
