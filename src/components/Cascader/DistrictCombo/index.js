import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import {
  formatType,
  formatDistrictValue,
  findDistrictLeafIndex,
  testEditableOptions
} from './../DistrictMain/utils'
import DistrictModal from './../DistrictModal'

// 内库使用-start
import ArrayUtil from './../../../utils/ArrayUtil'
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil, Modal } from 'lyrixi-design-mobile'
const Combo = Modal.SelectCombo
测试使用-end */

// 级联选择
const DistrictCombo = forwardRef(
  (
    {
      // Filter useless props to protect the feature
      multiple,

      // Combo
      readOnly,

      // Modal
      value,
      onChange,

      min = '',
      searchVisible,
      modalProps,

      // Main
      startType, // 开始于国家country, 省份province
      type = 'street', // 'country', 'province', 'city', 'district', 'street'
      loadCountries,
      loadCountryRegions,
      loadStreets,
      editableOptions,
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line
    type = formatType(type)

    // editableOptions需要根据list计算value的type, getList后才能计算value的type
    const listRef = useRef(null)
    let [readOnlyValue, setReadOnlyValue] = useState(null)

    // Expose api
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        getReadOnlyValue: () => {
          return readOnlyValue
        },
        ...comboRef.current
      }
    })

    // 获取readOnlyValue
    useEffect(() => {
      if (_.isEmpty(value) || _.isEmpty(editableOptions)) return
      if (!comboRef.current?.getList) return

      // 查询列表后再更新readOnlyValue
      queryList()
      // eslint-disable-next-line
    }, [JSON.stringify(value)])

    async function queryList() {
      listRef.current = await comboRef.current?.getList(value)
      updateReadOnlyValue()
    }

    // 清空操作，保留只读项，清空非只读项
    async function updateReadOnlyValue() {
      if (_.isEmpty(value) || _.isEmpty(editableOptions) || !Array.isArray(listRef.current)) {
        return null
      }

      // 更新value的type属性
      // eslint-disable-next-line
      value = formatDistrictValue(value, listRef.current, type)

      // 清空只能清空非只读项
      let newValue = []
      for (let item of value) {
        let isEditable = testEditableOptions(item, {
          editableOptions
        })
        if (isEditable === false) {
          newValue.push(item)
        }
      }

      // 设置只读的值
      setReadOnlyValue(newValue)

      return newValue
    }

    return (
      <Combo
        ref={comboRef}
        modalProps={{
          startType,
          type, // 'country', 'province', 'city', 'district', 'street'
          min,
          searchVisible,
          // 数据加载
          loadCountries,
          loadCountryRegions,
          loadStreets,
          editableOptions,
          ...modalProps,
          // Main Props
          mainProps: modalProps?.mainProps || {}
        }}
        value={value}
        onChange={
          onChange
            ? (newValue, ...other) => {
                // 清空操作，公能清空非只读项
                if (editableOptions && !newValue && Array.isArray(value) && value.length) {
                  // 清空完成
                  if (readOnlyValue?.length) {
                    // eslint-disable-next-line
                    newValue = readOnlyValue
                  }
                }
                onChange(newValue, ...other)
              }
            : null
        }
        {...props}
        // 只读项与值一致, 并且已经下钻到最末经, 只读
        readOnly={(() => {
          if (!Array.isArray(readOnlyValue) || !Array.isArray(value)) return readOnly
          if (!ArrayUtil.isEqual(readOnlyValue, value)) return readOnly
          const leafIndex = findDistrictLeafIndex(value, type)
          return typeof leafIndex === 'number' ? true : readOnly
        })()}
        modal={props?.modal || DistrictModal}
        clear={(clearParams) => {
          let clearable = clearParams?.clearable

          // 只读项与值一致, 不允许清空
          if (Array.isArray(readOnlyValue) && ArrayUtil.isEqual(readOnlyValue, value)) {
            clearable = false
          }

          // 自定义显隐清空按钮
          if (typeof props?.clear === 'function') {
            return props?.clear({ ...clearParams, clearable: clearable })
          }

          // 默认清空按钮显隐
          return clearable === false ? null : undefined
        }}
      />
    )
  }
)

export default DistrictCombo
