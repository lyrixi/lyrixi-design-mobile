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
      modalClassName,
      modalStyle,

      list,

      // List config
      wrapper,
      layout,
      checkable,
      checkbox,
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
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        list={list}
        // List config
        wrapper={wrapper}
        layout={layout}
        checkable={checkable}
        checkbox={checkbox}
        checkboxPosition={checkboxPosition}
      />
    )
  }
)

export default SelectCombo
