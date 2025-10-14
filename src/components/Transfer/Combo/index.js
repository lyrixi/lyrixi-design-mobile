import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// Transfer
const TransferCombo = forwardRef(
  (
    {
      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      value,
      allowClear,
      multiple,
      onChange,

      list,

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
        <Combo
          ref={comboRef}
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
          list={list}
        />
      </>
    )
  }
)

export default TransferCombo
