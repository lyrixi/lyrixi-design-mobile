import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用
import Combo from './../../../components/Modal/SelectCombo'

// 测试使用
// import { Modal } from 'lyrixi-design-mobile'
// const Combo = Modal.SelectCombo

const SelectCombo = forwardRef(
  (
    {
      // Modal
      modalProps,

      list,

      // List config
      wrapper,
      layout,
      checkable,
      checkbox,
      checkboxProps,
      checkboxPosition,
      ...props
    },
    ref
  ) => {
    return (
      <Combo
        ref={ref}
        {...props}
        // Modal
        modal={props?.modal || Modal}
        modalProps={{
          ...modalProps,
          list: list,
          // List config
          wrapper,
          layout,
          checkable,
          checkbox,
          checkboxProps,
          checkboxPosition
        }}
      />
    )
  }
)

export default SelectCombo
