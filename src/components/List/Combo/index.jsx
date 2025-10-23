import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import ListModal from './../Modal'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-design-mobile'
测试使用-end */

// List
const ListCombo = forwardRef(
  (
    {
      portal,
      // Style
      comboStyle,
      comboClassName,
      comboLeftIcon,
      comboRightIcon,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      title,

      value,
      allowClear,

      list,
      // 新版：加载数据方法，返回 { status, message, list }
      loadData,
      pagination,
      disableTopRefresh,
      disableBottomRefresh,

      // List config
      itemRender,
      itemLayout,
      multiple = false,
      checkable = true,

      // Events
      onChange,
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
        <ListModal
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
          itemRender={itemRender}
          itemLayout={itemLayout}
          checkable={checkable}
          loadData={loadData}
          pagination={pagination}
          disableTopRefresh={disableTopRefresh}
          disableBottomRefresh={disableBottomRefresh}
        />
      </>
    )
  }
)

export default ListCombo
