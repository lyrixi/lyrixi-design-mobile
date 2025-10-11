import React, { forwardRef } from 'react'
import CascaderModal from './../Modal'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// Cascader
const CascaderCombo = forwardRef(
  (
    {
      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,
      searchVisible,

      value,
      allowClear,
      multiple,
      onChange,

      list,
      loadData,
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
        modalRender={({ modalRef, getComboDOM, open, onClose }) => {
          return (
            <CascaderModal
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
              loadData={loadData}
              searchVisible={searchVisible}
            />
          )
        }}
      />
    )
  }
)

export default CascaderCombo
