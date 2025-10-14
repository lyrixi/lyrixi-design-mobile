import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import NavBarCombo from './../../Modal/NavBarCombo'
// 内库使用-end

/* 测试使用-start
import { BaseModal } from 'lyrixi-design-mobile'
const NavBarCombo = BaseModal.NavBarCombo
测试使用-end */

// 卡片选择
const ActionSheetCombo = (
  {
    // Modal
    portal,
    maskClassName,
    maskStyle,
    modalClassName,
    modalStyle,

    value,
    allowClear,
    multiple,
    onChange,

    title,
    list,

    // Combo props
    onBeforeOpen,
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)
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

  // 同步外部value到内部currentValue
  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  async function handleOpen() {
    if (typeof onBeforeOpen === 'function') {
      let goOn = await onBeforeOpen()
      if (goOn === false) return
    }
    setCurrentValue(value)
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  async function handleOk() {
    if (onChange) {
      let goOn = await onChange(currentValue)
      if (goOn === false) return
    }
    setOpen(false)
  }

  function handleChange(newValue) {
    setCurrentValue(newValue)
    // 单选时立即关闭
    if (multiple === false) {
      if (onChange) {
        onChange(newValue)
      }
      setOpen(false)
    }
  }

  return (
    <>
      <NavBarCombo
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
        onOk={handleOk}
        value={currentValue}
        allowClear={allowClear}
        multiple={multiple}
        onChange={handleChange}
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

export default forwardRef(ActionSheetCombo)
