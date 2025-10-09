import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用
import Combo from './../../../components/Modal/SelectCombo'

// 测试使用
// import { Modal } from 'lyrixi-design-mobile'
// const Combo = Modal.SelectCombo

// Picker
const PickerCombo = forwardRef(
  (
    {
      // Modal
      modalClassName,
      modalStyle,

      defaultPickerValue,
      list,
      ...props
    },
    ref
  ) => {
    return (
      <Combo
        ref={ref}
        {...props}
        // Modal
        modalRender={(modalProps) => {
          const ModalComponent = Modal
          return <ModalComponent {...modalProps} defaultPickerValue={defaultPickerValue} />
        }}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        list={list}
      />
    )
  }
)

export default PickerCombo
