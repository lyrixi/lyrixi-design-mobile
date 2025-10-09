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
      itemRender,
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
        mainRender={({ mainRef, visible, value, allowClear, multiple, onChange }) => {
          return (
            <Main
              ref={mainRef}
              visible={visible}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              loadList={loadList}
              pull={pull}
              pagination={pagination}
              itemRender={itemRender}
              layout={layout}
              checkable={checkable}
              checkbox={checkbox}
              checkboxPosition={checkboxPosition}
            />
          )
        }}
        className={`list-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default ListModal
