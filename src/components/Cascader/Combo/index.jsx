import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import CascaderModal from './../Modal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-design-mobile'
测试使用-end */

// Cascader
const CascaderCombo = forwardRef(
  (
    {
      // Modal
      portal,
      comboStyle,
      comboClassName,
      comboLeftIcon,
      comboRightIcon,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      title,
      searchVisible,

      value,
      allowClear,
      multiple,
      onChange,

      list,
      loadData,

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
        <CascaderModal
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
          loadData={loadData}
          searchVisible={searchVisible}
        />
      </>
    )
  }
)

export default CascaderCombo
