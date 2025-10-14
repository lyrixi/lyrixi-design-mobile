import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Main: common
      value,
      allowClear,
      multiple,
      onChange,
      open,
      onClose,
      onOpen,

      list,
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

    // 同步外部value到内部
    React.useEffect(() => {
      if (open) {
        setCurrentValue(formatValue(value))
      }
    }, [open, value])

    async function handleOk() {
      if (onChange) {
        let goOn = await onChange(currentValue)
        if (goOn === false) return
      }
      onClose && onClose()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
    }

    return (
      <SelectModal
        ref={modalRef}
        {...props}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
        ok={true}
        className={`transfer-modal${props.className ? ' ' + props.className : ''}`}
      >
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          list={list}
        />
      </SelectModal>
    )
  }
)

export default Modal
