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
      modalClassName,
      modalStyle,

      loadList,
      pull,
      pagination,

      // List config
      itemRender,
      layout,
      multiple = false,
      checkable = true,
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
        modalRender={(modalProps) => {
          const ModalComponent = CascaderModal
          return (
            <ModalComponent
              {...modalProps}
              loadList={loadList}
              pull={pull}
              pagination={pagination}
            />
          )
        }}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        // List config
        itemRender={itemRender}
        layout={layout}
        multiple={multiple}
        checkable={checkable}
        checkbox={checkbox}
        checkboxPosition={checkboxPosition}
      />
    )
  }
)

export default ListCombo
