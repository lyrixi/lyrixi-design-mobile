import React, { forwardRef } from 'react'
import Main from './../Main'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// Modal
const ListModal = forwardRef(
  (
    {
      // Main
      loadList,
      pull,
      pagination,

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
      <SelectModal
        ref={ref}
        {...props}
        main={props?.main || Main}
        mainProps={{
          ...props?.mainProps,
          loadList,
          pull,
          pagination,
          // List config
          wrapper,
          layout,
          checkable,
          checkbox,
          checkboxPosition
        }}
        className={`list-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default ListModal
