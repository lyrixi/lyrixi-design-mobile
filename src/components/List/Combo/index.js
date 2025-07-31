import React, { forwardRef } from 'react'
import CascaderModal from './../Modal'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// List
const ListCombo = forwardRef(
  (
    {
      // Modal
      modalProps,

      loadList,
      pull,
      pagination,

      // List config
      wrapper,
      layout,
      multiple = false,
      checkable = true,
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
        modal={props?.modal || CascaderModal}
        modalProps={{
          ...modalProps,
          loadList,
          pull,
          pagination,
          // List config
          wrapper,
          layout,
          multiple,
          checkable,
          checkbox,
          checkboxProps,
          checkboxPosition
        }}
      />
    )
  }
)

export default ListCombo
