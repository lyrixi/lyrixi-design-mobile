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

      value,
      allowClear,
      multiple,
      onChange,

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
        value={value}
        allowClear={allowClear}
        multiple={multiple}
        onChange={onChange}
        // Modal
        modalRender={({ modalRef, getComboDOM, visible, onVisibleChange }) => {
          return (
            <Modal
              // 透传属性用于控制显隐, 及暴露modalDOM和getModalDOM
              ref={modalRef}
              getComboDOM={getComboDOM}
              visible={visible}
              onVisibleChange={onVisibleChange}
              // Combo
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
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
