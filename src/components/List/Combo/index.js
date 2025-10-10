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
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      list,
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
        modalRender={({
          modalRef,
          getComboDOM,
          value,
          allowClear,
          multiple,
          onChange,
          visible,
          onVisibleChange
        }) => {
          return (
            <CascaderModal
              ref={modalRef}
              getComboDOM={getComboDOM}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              visible={visible}
              onVisibleChange={onVisibleChange}
              // Modal Props
              portal={portal}
              maskClassName={maskClassName}
              maskStyle={maskStyle}
              className={modalClassName}
              style={modalStyle}
              title={title}
              list={list}
              itemRender={itemRender}
              layout={layout}
              checkable={checkable}
              checkbox={checkbox}
              checkboxPosition={checkboxPosition}
              loadList={loadList}
              pull={pull}
              pagination={pagination}
            />
          )
        }}
        multiple={multiple}
      />
    )
  }
)

export default ListCombo
