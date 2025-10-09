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
const CascaderModal = forwardRef(
  (
    {
      visible,
      // Filter useless props to protect the feature
      searchVisible,
      multiple,

      list,
      loadData,
      ...props
    },
    ref
  ) => {
    return (
      <SelectModal
        ref={ref}
        ok={null}
        visible={visible}
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
              searchVisible={searchVisible}
              list={list}
              loadData={loadData}
            />
          )
        }}
        changeClosable={(newValue, newArguments, { triggerOk }) => {
          let lastTab =
            Array.isArray(newValue) && newValue.length ? newValue[newValue.length - 1] : null
          if (lastTab?.isLeaf) {
            triggerOk(newValue)
            return true
          }
        }}
        className={`cascader-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default CascaderModal
