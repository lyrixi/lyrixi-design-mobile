import React, { forwardRef } from 'react'
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
      modalClassName,
      modalStyle,

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
          return <ModalComponent {...modalProps} />
        }}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        list={list}
      />
    )
  }
)

export default TransferCombo
