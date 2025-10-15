import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-design-mobile'
测试使用-end */

// 卡片选择
const ActionSheetCombo = (
  {
    // Combo
    comboRender,
    comboChildren,

    comboStyle,
    comboClassName,
    comboLeftIcon,
    comboRightIcon,

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

  // 获取 Combo 节点
  function getComboNode() {
    if (typeof comboRender === 'function') {
      return comboRender({
        comboRef,
        open: open,
        onClick: handleOpen
      })
    }

    // 如果有 comboChildren，渲染 comboChildren
    if (comboChildren) {
      return (
        <div ref={comboRef} onClick={handleOpen}>
          {comboChildren}
        </div>
      )
    }

    // 默认使用 Input.Select
    return (
      <Input.Select
        ref={comboRef}
        {...props}
        style={comboStyle}
        className={comboClassName}
        leftIcon={comboLeftIcon}
        rightIcon={comboRightIcon}
        value={value}
        allowClear={allowClear}
        multiple={multiple}
        onChange={onChange}
        onClick={handleOpen}
      />
    )
  }

  return (
    <>
      {getComboNode()}
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
