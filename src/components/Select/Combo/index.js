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
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,

      list,

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
            <Modal
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
            />
          )
        }}
      />
    )
  }
)

export default SelectCombo
