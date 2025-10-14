import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'

import WeekModal from './../WeekModal'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import NavBarCombo from './../../Modal/NavBarCombo'
// 内库使用-end

/* 测试使用-start
import { DateUtil, Modal } from 'lyrixi-design-mobile'
const NavBarCombo = Modal.NavBarCombo
测试使用-end */

// 获取周
const WeekCombo = forwardRef(
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
      type,
      min,
      max,

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
            return DateUtil.format(value, 'week')
          }}
          {...props}
          value={value}
          allowClear={allowClear}
          multiple={multiple}
          onChange={onChange}
          onClick={handleOpen}
        />
        <WeekModal
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

export default WeekCombo
