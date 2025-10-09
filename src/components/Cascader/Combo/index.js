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
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      title,
      onBeforeChecked,
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
          return (
            <CascaderModal
              {...modalProps}
              portal={portal}
              maskClassName={maskClassName}
              maskStyle={maskStyle}
              className={modalClassName}
              style={modalStyle}
              title={title}
              onBeforeChecked={onBeforeChecked}
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
