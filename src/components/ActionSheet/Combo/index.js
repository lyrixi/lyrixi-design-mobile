import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { BaseModal } from 'lyrixi-design-mobile'
const Combo = BaseModal.SelectCombo
测试使用-end */

// 卡片选择
const ActionSheetCombo = (
  {
    // Modal
    portal,
    maskClassName,
    maskStyle,
    modalClassName,
    modalStyle,

    value,
    allowClear,
    multiple,
    onChange,

    title,
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
      modalRender={({ modalRef, getComboDOM, open, onClose }) => {
        return (
          <Modal
            // 透传属性用于控制显隐, 及暴露modalDOM和getModalDOM
            ref={modalRef}
            getComboDOM={getComboDOM}
            open={open}
            onClose={onClose}
            // Value
            value={value}
            allowClear={allowClear}
            multiple={multiple}
            onOk={onChange}
            // Modal Props
            portal={portal}
            maskClassName={maskClassName}
            maskStyle={maskStyle}
            className={modalClassName}
            style={modalStyle}
            title={title}
            list={list}
          />
        )
      }}
    />
  )
}

export default forwardRef(ActionSheetCombo)
