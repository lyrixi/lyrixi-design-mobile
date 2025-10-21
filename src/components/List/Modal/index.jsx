import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-design-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const ListModal = forwardRef(
  (
    {
      // Modal
      value,
      allowClear,
      multiple,
      onChange,
      open,
      onClose,
      onOpen,

      modalClassName,
      modalStyle,

      // Main
      loadList,
      pull,
      pagination,

      // List config
      itemRender,
      layout,
      checkable,
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
        setCurrentValue(value)
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
        modalClassName={DOMUtil.classNames('list-modal', modalClassName)}
        modalStyle={modalStyle}
      >
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          loadList={loadList}
          pull={pull}
          pagination={pagination}
          itemRender={itemRender}
          layout={layout}
          checkable={checkable}
        />
      </NavBarModal>
    )
  }
)

export default ListModal
