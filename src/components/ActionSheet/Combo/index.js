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
    onBeforeChecked,

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
      modalRender={({ modalRef, getComboDOM, value, allowClear, multiple, onChange }) => {
        return (
          <Modal
            ref={modalRef}
            getComboDOM={getComboDOM}
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
            onBeforeChecked={onBeforeChecked}
            list={list}
          />
        )
      }}
    />
  )
}

export default forwardRef(ActionSheetCombo)
