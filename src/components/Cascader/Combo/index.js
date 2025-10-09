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
      // Filter useless props to protect the feature
      multiple,
      // Modal
      modalClassName,
      modalStyle,
      searchVisible,

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
        // Modal
        modalRender={(modalProps) => {
          return <CascaderModal {...modalProps} loadData={loadData} searchVisible={searchVisible} />
        }}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        list={list}
      />
    )
  }
)

export default CascaderCombo
