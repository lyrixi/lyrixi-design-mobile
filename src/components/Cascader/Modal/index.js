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
      open,
      // Filter useless props to protect the feature
      searchVisible,
      multiple,

      list,
      loadData,
      onChange,
      onOk,
      ...props
    },
    ref
  ) => {
    return (
      <SelectModal
        ref={ref}
        ok={null}
        open={open}
        {...props}
        mainRender={({ mainRef, open, value, allowClear, multiple, onChange }) => {
          return (
            <Main
              ref={mainRef}
              visible={open}
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
        onChange={(newValue, { ok, ...newArguments }) => {
          let lastTab =
            Array.isArray(newValue) && newValue.length ? newValue[newValue.length - 1] : null
          if (lastTab?.isLeaf) {
            ok()
            return false
          }

          if (onChange) {
            return onChange(newValue, newArguments)
          }
        }}
        onOk={onOk}
        className={`cascader-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default CascaderModal
